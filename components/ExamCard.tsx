import { StyleSheet, Text, View } from "react-native";
import Exam from "../Models/Exam";
import NiceButton from "./NiceButton";

export default function({exam, navigate}: {exam: Exam, navigate: any}){

    const style = StyleSheet.create({
        card: {
            backgroundColor: 'white',
            width: "100%",
            padding: 15,
            marginBottom: 10,
            borderRadius: 8
        },

        cardTitle: {
            color: 'black',
            width: '100%',
            fontSize: 35,
            fontFamily: 'sans-serif',
            fontWeight: '300',
            marginBottom: 2
        },

        cardSubTitle: {
            color: '#949392',
            width: '100%',
            fontSize: 15,
            fontFamily: 'sans-serif',
            fontWeight: '100',
            marginBottom: 10
        },
        buttonWrapper: {
            flexDirection: 'row',
            justifyContent: 'flex-start'
        }
    })

    return(
        <View style={style.card}>

            <Text style={style.cardTitle}>{exam.title}</Text>
            <Text style={style.cardSubTitle}>
                [{exam.count ?? 0}] {exam.subject} Subject Question
            </Text>
            <View style={style.buttonWrapper}>
                <NiceButton text="View" size="sm" color="black" style={{marginRight: 10}} onPress={event => {navigate.navigate("ExamDetail")}}/>
                <NiceButton text="Take" size="sm" color="black" />
            </View>

        </View>
    );
}