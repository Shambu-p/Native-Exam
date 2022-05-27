import {View, Text, StyleSheet} from 'react-native';

import MyButton from '../components/NiceButton';
import AppBar from '../components/AppBar';
import { useContext } from 'react';
import AuthenticationContext from '../Context/AuthenticationContext';

export default function (props: any){

    const AuthContext = useContext(AuthenticationContext);
    
    return (
        <View style={{width: "100%"}}>

            <AppBar button={false} navigation={props.navigation} />

            <View style={{paddingHorizontal: 50, marginVertical: 20}}>

                <Text style={mystyle.mainText}>
                    Hello Students
                    Do you want to be tested?
                    then you are at the right place 
                </Text>

                <View style={mystyle.buttonContainer}>
                    <MyButton text="Login" color="black" size="md" style={{marginRight: 10}} onPress={
                        event => { 
                            props.navigation.push("Login");
                        }}
                    />
                    <MyButton text="Register" color="black" size="md" onPress={
                        event => { 
                            props.navigation.push("Registration");
                        }
                    } />
                </View>

            </View>

        </View>
    );
}

const mystyle = StyleSheet.create({
    mainText: {
        fontColor: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
});