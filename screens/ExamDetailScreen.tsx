import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "../components/AppBar";
import NiceButton from "../components/NiceButton";
import AuthenticationContext from "../Context/AuthenticationContext";
import Exam from "../Models/Exam";
import Exams from "../API.Interaction/ExamsAPI";
import ResultAPI from "../API.Interaction/ResultsAPI";

export default function({navigation, route}: {navigation: any, route: any}){

    // const {token} = useContext(AuthenticationContext);
    // const {auth, setToken, setAuth, token, changeLoading} = useContext(AuthenticationContext);

    const [exam, setExam] = useState<Exam | undefined>();

    useEffect(() => {
        
        const getExam = async () => {
            try{
                setExam(await Exams.detail(route.params.exam_id));
            }catch({message}){
                console.log(message);
            }
            
        };

        getExam();

    }, []); 

    const startExam = async () => {

        try {

            // let response = await ResultAPI.addResult(route.params.exam_id, token);
            navigation.push("ExamTaking", {
                exam_id: route.params.exam_id,
                // result_id: response.id
                result_id: 14
            });
            
        }catch({message}){
            console.log(message);
        }

    };

    return(
        <>
            <AppBar navigation={navigation}/>
            <View style={{width: '100%', paddingHorizontal: 20, paddingTop: 20}}>
                <View style={style.container}>
                    <Text style={style.title}>{exam ? exam.title : "title not found!!"}</Text>
                    <Text style={style.description}>{exam ? exam.description : "description not found!"}</Text>
                    <NiceButton 
                        text="Take Exam" 
                        color="black" 
                        size="block" 
                        onPress={(event: any) => {startExam();}}
                    />
                </View>
            </View>
        </>
    );

}

const style = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: '400',
        fontFamily: 'sans-serif',
        marginVertical: 10,
    },
    description: {
        fontSize: 15,
        fontWeight: '100',
        fontFamily: 'sans-serif',
        marginBottom: 30
    },
    container: {
        backgroundColor: 'white', 
        width: "100%", 
        padding: 15,
        borderRadius: 10
    }
});