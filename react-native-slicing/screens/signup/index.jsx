import { ToastAndroid, TouchableOpacity } from "react-native";
import { Text, View, TextInput } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/FirebaseConfig";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = ({}) => {

    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSignUp = function() {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            ToastAndroid.show('Anda berhasil Sign Up!', ToastAndroid.LONG);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            ToastAndroid.show('Anda gagal Sign Up', ToastAndroid.LONG);
        });
    }

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
      }}
    >
        <TouchableOpacity style={{
            padding: 5,
            marginBottom: 20,
            borderRadius: 5,
            backgroundColor: '#a9a9a9',
            width: 100
        }}
        onPress={() => navigation.navigate('signin')}
        >
            <Text style={{
                color: 'white',
                fontWeight: 'semibold',
                textAlign: 'center'
            }}>Sign In Page</Text>
        </TouchableOpacity>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        SIGN UP
      </Text>
      <Text>Silahkan daftar gais!
      </Text>
      <Text>Email</Text>
      <TextInput
        style={{
          padding: 5,
          marginTop: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
        }}
        onChangeText={(text) => setEmail(text)}
        placeholder="masukkan email anda"
      />
      <Text
        style={{
          marginTop: 10,
        }}
      >
        Password
      </Text>
      <TextInput
        style={{
          padding: 5,
          marginTop: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
        }}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
    
        placeholder="masukkan password anda"
      />
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "black",
            borderRadius: 99,
            width: 120,
          }}
          onPress={handleSignUp}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
{
  /* <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          
          keyboardType="numeric"
        /> */
}
export default SignUpScreen;
