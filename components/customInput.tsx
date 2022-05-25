import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function (props: {
    type?: string, 
    icon: any, 
    onChangeText?: (text: string)=>void,
    placeholder?: string
}){


    const style = StyleSheet.create({

        inputContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            backgroundColor: 'white',
            width: "100%",
            height: 'auto',
            borderRadius: 8,
            paddingHorizontal: 15,
            paddingVertical: 10,
            marginBottom: 15
        },

        textInput: {
            border: 'none',
            width: '100%',
            height: 35,
            fontSize: 25
        }

    });

    return(
        <View style={style.inputContainer}>
            <AntDesign style={{paddingRight: 15}} name={props.icon ?? "user"} size={35} color="black" />
            <TextInput 
                secureTextEntry={props.type ? (props.type === "password") : false} 
                onChangeText={props.onChangeText} 
                style={style.textInput} 
                placeholder={props.placeholder}
            />
        </View>
    );
}