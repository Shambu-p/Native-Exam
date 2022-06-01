import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { Login } from "../API.Interaction/AuthAPI";
import CustomInput from "../components/customInput";
import NiceButton from "../components/NiceButton";
import AuthenticationContext from "../Context/AuthenticationContext";
import * as cookies from "../cookies";

export default function(props: any){

    const [inputs, setInputs] = useState<{password: string, email: string}>({email: "", password: ""});
    const {auth, setToken, setAuth, changeLoading} = useContext(AuthenticationContext);


    const submitForm = async () => {
    
        try{
            
            // setTimeout(() => {changeLoading(true);}, 1);
            changeLoading(true);
            
            let response = await Login(inputs.email, inputs.password);
            setToken(response.token);
            setAuth({
                users: response,
                isLoggedIn: true
            });

            cookies.set("logged_user", response.token, 2);

            changeLoading(false);
            props.navigation.push("Menu");

        }catch({message}){
            changeLoading(false);
            alert(message);
        }
    
    };

    const textChange = (text: string, field: ("email" | "password")) => {
        let change = (field == "email") ? {email: text} : {password: text};
        setInputs({...inputs, ...change});
    };

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

                <CustomInput icon="mail" placeholder="Email Address" onChangeText={(text: string) => {textChange(text, "email")}} />
                <CustomInput type="password" icon="lock" placeholder="Password" onChangeText={(text: string) => {textChange(text, "password")}} />

                <NiceButton text="Login" color="black" onPress={(event: any) => {submitForm()}} size="block" style={{marginBottom: 10, width: '100%'}}/>

                <TouchableOpacity onPress={()=>{props.navigation.push("Registration")}}>
                    <Text style={style.textButton}>Register First</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

}

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