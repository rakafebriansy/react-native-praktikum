import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button, TouchableHighlight } from 'react-native';

export default function App() {

  function clickMe() {
    Alert.alert('HALO', 'Kamu ganteng',[{
      text: 'TUTUP'
    }]);
  }

  return (
    <View style={{ 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
     }}>
      <View style={{ 
        alignItems: 'center',
        gap: 10
      }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>LOGIN</Text>
        <View style={{ 
        gap: 7,
        alignItems: 'center'
      }}>
          {/* username */}
          <View style={{ 
        gap: 4
      }}>
            <Text>Username</Text>
            <TextInput style={{ 
              borderWidth: 2,
              borderColor: 'black',
              padding: 5,
              width: 250,
              borderRadius: 30
             }}></TextInput>
          </View>
          {/* password */}
          <View style={{ 
        gap: 4
      }}>
            <Text>Password</Text>
            <TextInput style={{ 
              borderWidth: 2,
              borderColor: 'black',
              padding: 5,
              width: 250,
              borderRadius: 30
             }}></TextInput>
          </View>
          {/* button */}
          <TouchableOpacity onPress={clickMe}>
            <View style={{ 
              backgroundColor: 'lightblue',
              padding: 5,
              borderRadius: 10,
              width: 80,
              alignItems: 'center'
            }}>
              <Text style={{ 
                color: 'white'
              }}>Submit</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableHighlight onPress={clickMe} underlayColor='#ff0000'>
            <View style={{ 
              backgroundColor: 'lightblue',
              padding: 5,
              borderRadius: 10,
              width: 80,
              alignItems: 'center'
            }}>
              <Text style={{ 
                color: 'white'
              }}>Submit</Text>
            </View>
          </TouchableHighlight>
          <Button title="Click me" onPress={clickMe}/> */}
        </View>
      </View>
    </View>
  );
}
