import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#EAF0F1'
      },
      titleText: {
            fontSize: 25,
            marginTop: 15,
            fontFamily: 'monospace'
      },
      outputView: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#a6a8e5',
            width: '90%',
            padding: 10,
            marginVertical: 15,
            borderRadius: 5
      },
      resultText: {
            fontSize: 25,
            color: '#000'
      },
      copyButton: {
            backgroundColor: '#3C40C6',
            padding: 10,
            borderRadius: 5
      },
      sliderView: {
            flexDirection: 'row',
            marginTop: 10
      },
      itemRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            padding: 5
      },
      itemText: {
            fontSize: 16,
            fontFamily: 'monospace'
      },
      generateButton: {
            borderColor: '#3C40C6',
            backgroundColor: '#EAF0F1',
            padding: 7,
            paddingHorizontal: 15,
            alignItems: 'center',
            marginTop: 20,
            position: 'absolute',
            bottom: 50,
            borderRadius: 10,
            borderWidth: 1
      },
      creditText: {
            fontSize: 12,
            position: 'absolute',
            bottom: 8,
            fontFamily: 'monospace',
            textDecorationLine: 'underline'
      },
      dividerText: {
            width: '100%',
            height: 20,
            backgroundColor: 'lightgrey',
            textAlignVertical: 'center',
            paddingLeft: '7%',
            marginVertical: 10
      }
});
