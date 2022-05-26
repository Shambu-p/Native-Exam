import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import AppBar from "../components/AppBar";
import CustomInput from "../components/customInput";
import NiceButton from "../components/NiceButton";

export default function(props: any){
    
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
            textAlign: "center", 
            fontSize: 20, 
            fontFamily: 'sans-serif',
        }

    });

    const back = () => {
        props.navigation.navigate("Home");
    }

    return (
        <View style={{width: "100%"}}>
            
            <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
                <Text style={{marginBottom: 40, paddingVertical: 20, paddingHorizontal: 20, fontSize: 25}}>
                    <AntDesign style={{marginRight: 10}} name="left" size={25} color="black" />
                    Home
                </Text>
            </TouchableOpacity>

            <View style={style.form}>

                <View style={style.headerContainer}>
                    <AntDesign style={{marginBottom: 5}} name="user" size={60} color="black" />
                </View>
                <Text style={style.headerText}>Sign in</Text>

                <CustomInput icon="mail" placeholder="Email Address" />
                <CustomInput type="password" icon="lock" placeholder="Password" />

                <NiceButton text="Login" color="black" size="block" style={{marginBottom: 10, width: '100%'}}/>

                <TouchableOpacity onPress={()=>{props.navigation.push("Registration")}}>
                    <Text style={style.textButton}>Register First</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

}