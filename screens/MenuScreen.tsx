import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppBar from "../components/AppBar";
import { Ionicons } from '@expo/vector-icons';

export default function(props: any){


    const style = StyleSheet.create({
        container: {
            width: '70%',
            paddingHorizontal: 20,
            paddingTop: 10,
            marginHorizontal: 'auto',
            flexDirection: 'row',
            justifyContet: 'flex-start',
            flexWrap: 'wrap'
        },
        itemsContainer: {
            width: '50%',
            paddingHorizontal: 20,
            paddingVertical: 15,
            
            marginBottom: 10
        },
        itemText: {
            fontSize: 15,
            fontFamily: 'Helvetica',
            marginTop: 5,
            textAlign: 'center'
        },
        item: {
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingHorizontal: 20, 
            marginHorizontal: 'auto', 
            borderRadius: 8, 
            width: '95%',
            marginBottom: 10
        }

    })

    return(
        <>
            <AppBar button={false} />

            <View style={style.container}>
                <TouchableOpacity style={style.item} onPress={()=>{props.navigation.push("ExamList")}}>
                    <Ionicons name="book" color='black' size={60} style={{marginHorizontal: 'auto'}} />
                    <Text style={style.itemText}>Exams</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.item} onPress={()=>{props.navigation.push("ResultList")}}>
                    <Ionicons name="school" color='black' size={60} style={{marginHorizontal: 'auto'}} />
                    <Text style={style.itemText}>My Results</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.item} onPress={()=>{props.navigation.push("Account")}}>
                    <Ionicons name="person" color='black' size={60} style={{marginHorizontal: 'auto'}} />
                    <Text style={style.itemText}>Account</Text>
                </TouchableOpacity>
            </View>

        </>
    );

}