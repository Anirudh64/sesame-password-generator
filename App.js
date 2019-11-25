import React, { Component } from 'react';
import {
      View,
      Text,
      TouchableOpacity,
      TextInput,
      ToastAndroid,
      Clipboard,
      TouchableNativeFeedback,
      Keyboard,
      TouchableWithoutFeedback,
      CheckBox,
      StatusBar
} from 'react-native';
import styles from './assets/styles/Styles';
import Icon from 'react-native-vector-icons/AntDesign';

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
            }
      }

      generatePassword = () => {
            const length = +(this.state.passwordLength > 16 ? 16 : this.state.passwordLength < 8 ? 8 : this.state.passwordLength);
            const upper = this.state.upperCaseBox;
            const lower = this.state.lowerCaseBox
            const number = this.state.numbersBox;
            const symbol = this.state.symbolsBox;

            randomFunc = {
                  lower: this.getRandomLower,
                  upper: this.getRandomUpper,
                  number: this.getRandomNumber,
                  symbol: this.getRandomSymbol
            }

            let generatedPassword = '';
            const typesCount = lower + upper + number + symbol;
            const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

            if (typesCount === 0) {
                  return this.setState({
                        finalPassword: ''
                  });
            }

            for (let i = 0; i < length; i += typesCount) {
                  typesArr.forEach(type => {
                        const funcName = Object.keys(type)[0];
                        generatedPassword += randomFunc[funcName]();
                  });
            }
            this.setState({
                  finalPassword: generatedPassword.slice(0, length)
            })
      }

      copyToClipboard = () => {
            if (this.state.finalPassword) {
                  Clipboard.setString(this.state.finalPassword);
                  ToastAndroid.show('Copied to Clipboard', ToastAndroid.SHORT)
            }
      }

      getRandomLower = () => {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }

      getRandomUpper = () => {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }

      getRandomNumber = () => {
            return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      }

      getRandomSymbol = () => {
            const symbols = '!@#$%^&*(){}[]=<>/,.'
            return symbols[Math.floor(Math.random() * symbols.length)];
      }
      getRandomIndex = () => {
            return Math.floor(Math.random() * 4);
      }

      render() {
            return (
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                              <StatusBar backgroundColor={'#EAF0F1'} barStyle={'dark-content'}></StatusBar>
                              <Text style={styles.titleText}>Sesame</Text>
                              <View style={styles.outputView}>
                                    <Text style={styles.resultText}>{this.state.finalPassword}</Text>
                                    <TouchableOpacity onPress={this.copyToClipboard}>
                                          <Icon name={'copy1'} size={25} color={'#FFF'} style={{ backgroundColor: '#3C40C6', padding: 10 }}></Icon>
                                    </TouchableOpacity>
                              </View>
                              <View style={styles.itemRow}>
                                    <Text style={styles.itemText}>Password Length(12 to 16)</Text>
                                    <TextInput
                                          style={styles.lengthInput}
                                          maxLength={2}
                                          onChangeText={(value) => {
                                                this.setState({ passwordLength: value })
                                          }}
                                          keyboardType={'number-pad'}
                                          value={`${this.state.passwordLength}`}
                                    ></TextInput>
                              </View>
                              <View style={styles.itemRow}>
                                    <Text style={styles.itemText}>Include uppercase letters</Text>
                                    <CheckBox
                                          value={this.state.upperCaseBox}
                                          onValueChange={() => {
                                                this.setState({ upperCaseBox: !this.state.upperCaseBox })
                                          }}
                                    ></CheckBox>
                              </View>
                              <View style={styles.itemRow}>
                                    <Text style={styles.itemText}>Include lowercase letters</Text>
                                    <CheckBox
                                          value={this.state.lowerCaseBox}
                                          onValueChange={() => {
                                                this.setState({ lowerCaseBox: !this.state.lowerCaseBox })
                                          }}
                                    ></CheckBox>
                              </View>
                              <View style={styles.itemRow}>
                                    <Text style={styles.itemText}>Include numbers</Text>
                                    <CheckBox
                                          value={this.state.numbersBox}
                                          onValueChange={() => {
                                                this.setState({ numbersBox: !this.state.numbersBox })
                                          }}
                                    ></CheckBox>
                              </View>
                              <View style={styles.itemRow}>
                                    <Text style={styles.itemText}>Include symbols</Text>
                                    <CheckBox
                                          value={this.state.symbolsBox}
                                          onValueChange={() => {
                                                this.setState({ symbolsBox: !this.state.symbolsBox })
                                          }}
                                    ></CheckBox>
                              </View>
                              <TouchableNativeFeedback
                                    onPress={this.generatePassword}>
                                    <View style={styles.generateButton}>
                                          <Text style={{ fontSize: 27, color: '#FFF' }}>Generate password</Text>
                                    </View>
                              </TouchableNativeFeedback>
                              <Text style={styles.creditText}>Anirudh Apps</Text>
                        </View>
                  </TouchableWithoutFeedback>
            );
      }
}