import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import CustomInput from "../components/customInput";
import NiceButton from "../components/NiceButton";
import { AntDesign } from "@expo/vector-icons";

export default function (props: any){


    const style = StyleSheet.create({
        form: {
            width: '100%',
            paddingHorizontal: 20,
            marginTop: 30
        },

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
        },

        headerText: {
            width: '100%',
            textAlign: 'center',
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'Helvetica',
            marginBottom: 30
        },
        
        headerContainer: {
            flexDirection: 'row',
            justifyContent: 'center'
        },

        textButton: {
            marginBottom: 10, 
            textAlign: "center", 
            fontSize: 20, 
            fontFamily: 'sans-serif',
        }

    });

    return (
        <View style={{width: "100%", paddingBottom: 25}}>
            
            <TouchableOpacity onPress={()=>{props.navigation.navigate("Home")}}>
                <Text style={{marginBottom: 10, paddingVertical: 20, paddingHorizontal: 20, fontSize: 25}}>
                    <AntDesign style={{marginRight: 10}} name="left" size={25} color="black" />
                    Home
                </Text>
            </TouchableOpacity>

            <View style={style.form}>

                <View style={style.headerContainer}>
                    <AntDesign style={{marginBottom: 5}} name="user" size={60} color="black" />
                </View>
                <Text style={style.headerText}>Sign up</Text>

                <CustomInput icon="user" placeholder="Full Name" />
                <CustomInput icon="mail" placeholder="Email Address" />
                <CustomInput icon="user" placeholder="Your Age" />
                <CustomInput icon="grade" placeholder="Your Grade" />
                <CustomInput type="password" icon="lock" placeholder="Password" />

                <NiceButton text="Register" size="block" color="black" style={{width: '100%'}} />

            </View>
        </View>
    );

}