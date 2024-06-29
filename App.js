import React, { Component } from 'react';
import {
      View,
      Text,
      TouchableOpacity,
      ToastAndroid,
      Clipboard,
      TouchableNativeFeedback,
      Keyboard,
      TouchableWithoutFeedback,
      StatusBar,
      Linking
} from 'react-native';
import styles from './assets/styles/Styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Slider from '@react-native-community/slider';
import ToggleSwitch from 'toggle-switch-react-native';

export default class App extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  finalPassword: '',
                  passwordLength: 12,
                  upperCaseBox: true,
                  lowerCaseBox: true,
                  numbersBox: true,
                  symbolsBox: true
            };
      }

      componentDidMount = () => {
            this.generatePassword();
      };

      generatePassword = () => {
            const length = +(this.state.passwordLength > 16 ? 16 : this.state.passwordLength < 8 ? 8 : this.state.passwordLength);
            const upper = this.state.upperCaseBox;
            const lower = this.state.lowerCaseBox;
            const number = this.state.numbersBox;
            const symbol = this.state.symbolsBox;

            randomFunc = {
                  lower: this.getRandomLower,
                  upper: this.getRandomUpper,
                  number: this.getRandomNumber,
                  symbol: this.getRandomSymbol
            };

            let generatedPassword = '';
            const typesCount = lower + upper + number + symbol;
            const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

            if (typesCount === 0) {
                  return this.setState({
                        finalPassword: ''
                  });
            }

            for (let i = 0; i < length; i += typesCount) {
                  typesArr.forEach((type) => {
                        const funcName = Object.keys(type)[0];
                        generatedPassword += randomFunc[funcName]();
                  });
            }
            this.setState({
                  finalPassword: generatedPassword.slice(0, length)
            });
      };

      copyToClipboard = () => {
            if (this.state.finalPassword) {
                  Clipboard.setString(this.state.finalPassword);
                  ToastAndroid.show('Copied to Clipboard', ToastAndroid.SHORT);
            }
      };

      getRandomLower = () => {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      };

      getRandomUpper = () => {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      };

      getRandomNumber = () => {
            return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      };

      getRandomSymbol = () => {
            const symbols = '!@#$%^&*(){}[]=<>/,.';
            return symbols[Math.floor(Math.random() * symbols.length)];
      };
      getRandomIndex = () => {
            return Math.floor(Math.random() * 4);
      };

      render() {
            return (
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                              <StatusBar backgroundColor={'#EAF0F1'} barStyle={'dark-content'}></StatusBar>
                              <Text style={styles.titleText}>Sesame</Text>
                              <View style={styles.outputView}>
                                    <Text style={styles.resultText}>{this.state.finalPassword}</Text>
                                    <TouchableOpacity onPress={this.copyToClipboard}>
                                          <Icon name={'copy1'} size={25} color={'#FFF'} style={styles.copyButton}></Icon>
                                    </TouchableOpacity>
                              </View>
                              <View style={[styles.itemRow, { flexDirection: 'column', alignItems: 'flex-start' }]}>
                                    <Text style={styles.itemText}>Length ({this.state.passwordLength})</Text>
                                    <View style={styles.sliderView}>
                                          <Text>8</Text>
                                          <Slider
                                                style={{ width: '90%', height: 25 }}
                                                minimumValue={8}
                                                maximumValue={16}
                                                minimumTrackTintColor='#3C40C6'
                                                maximumTrackTintColor='#000000'
                                                thumbTintColor={'#3C40C6'}
                                                onValueChange={(value) => {
                                                      this.setState({ passwordLength: value });
                                                }}
                                                value={this.state.passwordLength}
                                                step={1}
                                          />
                                          <Text>16</Text>
                                    </View>
                              </View>
                              <Text style={styles.dividerText}>INCLUDE</Text>
                              <View style={styles.itemRow}>
                                    <Text style={styles.itemText}>Uppercase</Text>
                                    <ToggleSwitch
                                          isOn={this.state.upperCaseBox}
                                          onColor='#3C40C6'
                                          offColor='grey'
                                          size='small'
                                          onToggle={(isOn) => this.setState({ upperCaseBox: isOn })}
                                    />
                              </View>
                              <View style={styles.itemRow}>
                                    <Text style={styles.itemText}>Lowercase</Text>
                                    <ToggleSwitch
                                          isOn={this.state.lowerCaseBox}
                                          onColor='#3C40C6'
                                          offColor='grey'
                                          size='small'
                                          onToggle={(isOn) => this.setState({ lowerCaseBox: isOn })}
                                    />
                              </View>
                              <View style={styles.itemRow}>
                                    <Text style={styles.itemText}>Digits</Text>
                                    <ToggleSwitch
                                          isOn={this.state.numbersBox}
                                          onColor='#3C40C6'
                                          offColor='grey'
                                          size='small'
                                          onToggle={(isOn) => this.setState({ numbersBox: isOn })}
                                    />
                              </View>
                              <View style={styles.itemRow}>
                                    <Text style={styles.itemText}>Symbols</Text>
                                    <ToggleSwitch
                                          isOn={this.state.symbolsBox}
                                          onColor='#3C40C6'
                                          offColor='grey'
                                          size='small'
                                          onToggle={(isOn) => this.setState({ symbolsBox: isOn })}
                                    />
                              </View>
                              <TouchableNativeFeedback onPress={this.generatePassword}>
                                    <View style={styles.generateButton}>
                                          <Text style={{ fontSize: 22, color: '#3C40C6', fontFamily: 'monospace' }}>Generate password</Text>
                                    </View>
                              </TouchableNativeFeedback>
                              <TouchableWithoutFeedback
                                    onPress={() => {
                                          Linking.openURL('https://anirudhabhurke.github.io/');
                                    }}
                              >
                                    <Text style={styles.creditText}>anirudhabhurke.github.io</Text>
                              </TouchableWithoutFeedback>
                        </View>
                  </TouchableWithoutFeedback>
            );
      }
}
