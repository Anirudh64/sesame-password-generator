import { StyleSheet } from "react-native"

export default StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#EAF0F1',
      },
      titleText: {
            fontSize: 25,
            marginTop: 15
      },
      outputView: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#a6a8e5',
            width: '90%',
            padding: 10,
            marginVertical: 15,
      },
      resultText: {
            fontSize: 25,
            color: '#3C40C6',
      },
      itemRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            padding: 5,
      },
      lengthInput: {
            fontSize: 20,
            backgroundColor: '#d4d5f2',
            width: '20%',
            paddingHorizontal: 5,
            paddingVertical: 2,
      },
      itemText: {
            fontSize: 19
      },
      generateButton: {
            backgroundColor: '#3C40C6',
            padding: 10,
            width: '80%',
            alignItems: 'center',
            marginTop: 20,
            elevation: 3,
            position: 'absolute',
            bottom: 50,
      },
      creditText: {
            fontSize: 12,
            position: 'absolute',
            bottom: 8,
      }
});