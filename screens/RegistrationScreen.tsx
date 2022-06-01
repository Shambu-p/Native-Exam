import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import CustomInput from "../components/customInput";
import NiceButton from "../components/NiceButton";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import {registration} from "../API.Interaction/AuthAPI";
import AuthenticationContext from "../Context/AuthenticationContext";

export default function (props: any){

    const [inputs, setInputs] = useState<{
        password?: string, 
        email?: string,
        confirmPassword?: string,
        age?: number,
        grade?: number,
        name?: string
    }>({});

    const {auth, setToken, setAuth, changeLoading} = useContext(AuthenticationContext);

    const textChange = (text: string, field: ("email" | "password" | "confirm_password" | "age" | "grade" | "name")) => {
        
        let change = {};
        switch(field){
            case "email":
                change = change = {email: text};
                break;
            case "password":
                change = {password: text};
                break;
            case "confirm_password":
                change = {confirmPassword: text};
                break;
            case "age":
                change = {age: text};
                break;
            case "grade":
                change = {grade: text};
                break;
            case "name":
                change = {name: text};
                break;
            default:
                change = {};
        };

        setInputs({...inputs, ...change});

    };

    const submitForm = async () => {
        setTimeout(() => {changeLoading(true);}, 1);
        try{
            await registration({
                name: inputs.name ?? "",
                age: inputs.age ?? 0,
                grade: inputs.grade ?? 0,
                password: inputs.password ?? "",
                confirm_password: inputs.confirmPassword ?? "",
                email: inputs.email ?? "",
            });

            changeLoading(false);
            props.navigation.push("login");
            alert("register successfully");
            
        }catch({message}){
            changeLoading(false);
            alert(message);
        }
    };

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

                <CustomInput 
                    icon="user" 
                    placeholder="Full Name" 
                    onChangeText={(text: string) => {textChange(text, "name")}}
                />
                <CustomInput 
                    icon="mail" 
                    placeholder="Email Address" 
                    onChangeText={(text: string) => {textChange(text, "email")}}
                />
                <CustomInput 
                    icon="user" 
                    placeholder="Your Age" 
                    onChangeText={(text: string) => {textChange(text, "age")}}
                />
                <CustomInput 
                    icon="grade" 
                    placeholder="Your Grade"
                    onChangeText={(text: string) => {textChange(text, "grade")}}
                />
                <CustomInput 
                    type="password" 
                    icon="lock" 
                    placeholder="New Password" 
                    onChangeText={(text: string) => {textChange(text, "password")}}
                />
                <CustomInput 
                    type="password" 
                    icon="lock" 
                    placeholder="Confirm Password" 
                    onChangeText={(text: string) => {textChange(text, "confirm_password")}}
                />

                <NiceButton 
                    text="Register" 
                    size="block" 
                    color="black" 
                    style={{width: '100%'}} 
                    onPress={(event: any) => {submitForm()}}
                />

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
        marginBottom: 10, 
        textAlign: "center", 
        fontSize: 20, 
        fontFamily: 'sans-serif',
    }

});