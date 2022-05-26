import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {AntDesign} from '@expo/vector-icons';

export default function(props: {button?: boolean, navigation?: any}){

    const style = StyleSheet.create({
        
        appBar: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            backgroundColor: 'black', 
            paddingVertical: 20,
            paddingHorizontal: 15
        },
    
        appBarText: {
            fontSize: 25,
            fontWeight: '400',
            fontFamily: 'sans-serif, sego UI',
            color: 'white'
        }

    });

    let button = typeof props.button == "undefined" ? true : props.button;

    return (
        <View style={style.appBar}>
            {button ? (
                <TouchableOpacity style={{width: 'max-content'}} onPress={() => {props.navigation.goBack();}} >
                    <AntDesign style={{paddingRight: 15}} name="arrowleft" size={25} color="white" />
                </TouchableOpacity>
            ) : ""}
            <Text style={style.appBarText}>Absoft Exam Center</Text>
        </View>
    );
}
