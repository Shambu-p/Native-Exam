import { StyleSheet, Text, View } from "react-native";
import AppBar from "../components/AppBar";
import NiceButton from "../components/NiceButton";

export default function(props: any){

    return(
        <>
            <AppBar navigation={props.navigation}/>
            <View style={style.container}>
                <Text style={style.nameText}>The Name</Text>

                <Text style={style.detailText}>Age: 10</Text>
                <Text style={style.detailText}>Grade: 5</Text>
                <Text style={style.detailText}>email: abnet@absoft.net</Text>
                <NiceButton text="Log out" color="black" size="block" style={{width: '100%', marginTop: 20}} />
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