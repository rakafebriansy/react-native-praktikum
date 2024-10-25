import { Text, TextInput } from "react-native";

const InputTeks = (props) => {
    const { label, children, isPassword = false, fungsi } = props;
    return (
        <>
            <Text>{label}</Text>
            <TextInput style={{ 
                borderWidth: 2,
                borderColor: 'black',
                padding: 5,
                width: 250,
                borderRadius: 30
                }}
                placeholder={children}
                secureTextEntry={isPassword}
                onChangeText={(e) => {
                    fungsi(e)
                }}
                ></TextInput>
        </>
    );
}

export default InputTeks;