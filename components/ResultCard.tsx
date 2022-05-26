import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Exam from "../Models/Exam";

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
        },
        badge: {
            width: 'max-content', 
            paddingVertical: 5,
            paddingHorizontal: 10, 
            backgroundColor: 'green',
            borderRadius: 5
        },
        badgeText: {
            fontSize: 15, 
            color: 'white', 
            fontWeight: 'bold', 
            fontFamily: 'sans-serif'
        },
        bottomText: {
            width: 'max-content', 
            fontSize: 20, 
            fontWeight: 'bold', 
            fontFamily: 'sans-serif',
            marginRight: 10
        }
    })

    return(
        <TouchableOpacity style={style.card} onPress={event => {navigate.push("ResultDetail")}}>

            <Text style={style.cardTitle}>{exam.title}</Text>
            <Text style={style.cardSubTitle}>
                [{exam.count ?? 0}] {exam.subject} Subject Question
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Text style={style.bottomText}>Score</Text>
                <View style={style.badge}>
                    <Text style={style.badgeText}>5</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

/*
<View style={style.buttonWrapper}>
                <NiceButton text="View" size="sm" color="black" style={{marginRight: 10}} onPress={event => {navigate.push("ExamDetail")}}/>
                <NiceButton text="Take" size="sm" color="black" />
            </View>
*/