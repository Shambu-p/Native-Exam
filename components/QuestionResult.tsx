import { StyleSheet, Text, View } from "react-native";

export default function(){

    const style = StyleSheet.create({
        card: {
            backgroundColor: 'white',
            width: '100%',
            height: 'auto',
            padding: 10,
            marginBottom: 10,
            borderRadius: 8,
        },
        title: {
            fontSize: 30,
            width: '100%',
            marginBottom: 15,
            fontFamily: 'sans-serif',
            fontWeight: '400'
        },
        correctChoice: {
            color: 'white',
            backgroundColor: 'green',
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            marginBottom: 10,
            paddingLeft: 10
        },
        incorrectChoice: {
            color: 'white',
            backgroundColor: 'red',
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            marginBottom: 10,
            paddingLeft: 10
        },
        choice: {
            fontSize: 20,
            fontFamily: 'sans-serif',
            marginBottom: 10,
            paddingLeft: 10
        }
    });

    return (
        <View style={style.card}>
            <Text style={style.title}>The question will be here</Text>

            <Text style={style.choice}>Choice 0</Text>
            <Text style={style.correctChoice}>Choice 1</Text>
            <Text style={style.choice}>Choice 4</Text>
            <Text style={style.incorrectChoice}>Choice 2</Text>
            <Text style={style.choice}>Choice 3</Text>
        </View>
    );
}