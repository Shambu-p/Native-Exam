import {View, Text, StyleSheet} from 'react-native';

import MyButton from '../components/NiceButton';
import AppBar from '../components/AppBar';

export default function (props: any){
    
    return (
        <View style={{width: "100%"}}>

            <AppBar />

            <View style={{paddingHorizontal: 50, marginVertical: 20}}>

                <Text style={mystyle.mainText}>
                    Hello Students
                    Do you want to be tested?
                    then you are at the right place
                </Text>

                <View style={mystyle.buttonContainer}>
                    <MyButton text="Login" color="black" size="md" style={{marginRight: 10}} onPress={
                        event => { 
                            props.navigation.navigate("Login");
                        }}
                    />
                    <MyButton text="Register" color="black" size="md" onPress={
                        event => { 
                            props.navigation.navigate("Registration");
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