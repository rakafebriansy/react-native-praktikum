import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button, TouchableHighlight } from 'react-native';
import InputTeks from './components/InputTeks';
import { useRef, useState } from 'react';

export default function App() {

  function clickMe() {
    Alert.alert('HALO', 'Kamu ganteng',[{
      text: 'TUTUP'
    }]);
  }

  const [udahLogin, setUdahLogin] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saatUsernameDiinput = (teks) => {
    setUsername(teks)
  }
  const saatPasswordDiinput = (teks) => {
    setPassword(teks)
  }

  const handleLogin = () => {
    setUdahLogin(true);
    if(username == 'RAKA' && password == '12345') {
      setAlertMessage('ANDA BERHASIL LOGIN');
    } else{
      setAlertMessage('ANDA GAGAL LOGIN');
    }
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
        {
          udahLogin && (
            <Text 
        style={{ 
          textAlign: 'center',
          color: 'red',
          fontWeight: 'bold'
         }}>{alertMessage}</Text>
          )
        }
          <Text>Username</Text>
            <TextInput style={{ 
                borderWidth: 2,
                borderColor: 'black',
                padding: 5,
                width: 250,
                borderRadius: 30
                }}
                placeholder='Masukkan Username'
                onChangeText={saatUsernameDiinput}
                ></TextInput>
          </View>
          {/* password */}
          <View style={{ 
        gap: 4
      }}>
          <InputTeks label="Password" 
          fungsi={saatPasswordDiinput}
          isPassword={true}>Masukkan Password</InputTeks>
          </View>
          {/* button */}
          <TouchableOpacity onPress={handleLogin}>
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
        </View>
      </View>
    </View>
  );
}