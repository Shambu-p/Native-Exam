import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "../components/AppBar";
import NiceButton from "../components/NiceButton";
import AuthenticationContext from "../Context/AuthenticationContext";
import {Logout} from '../API.Interaction/AuthAPI';
import * as cookies from '../cookies';

export default function(props: any){

    const {auth, setToken, setAuth, token} = useContext(AuthenticationContext);
    
    const logout = async () => {

        await Logout(token);
        setAuth({
            users: null,
            isLoggedIn: false
        });
        
        cookies.remove("logged_user");

    }

    return(
        <>
            <AppBar navigation={props.navigation}/>
            <View style={style.container}>

                <Text style={style.nameText}>{auth.users.fullname}</Text>

                <Text style={style.detailText}>Age: {auth.users.age}</Text>
                <Text style={style.detailText}>Grade: {auth.users.grade}</Text>
                <Text style={style.detailText}>email: {auth.users.email}</Text>

                <NiceButton 
                    text="Log out" 
                    color="black" 
                    size="block" 
                    style={{
                        width: '100%', 
                        marginTop: 20
                    }} 
                    onPress={(event: any) => {logout()}}
                />

            </View>
        </>
    );

}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',
        paddingHorizontal: 25,
        paddingVertical: 25,
        marginHorizontal: 'auto',
        marginTop: 30,
        borderRadius: 8
    },
    nameText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'roboto',
        fontWeight: 'bold',
        marginBottom: 25
    },

    detailText: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'roboto',
        marginBottom: 10
    }


});