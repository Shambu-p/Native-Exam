import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppBar from "../components/AppBar";
import Question from "../components/Question";
import AuthenticationContext from "../Context/AuthenticationContext";
import Exam from "../Models/Exam";
import ExamQuestionCombination from "../Models/ExamQuestionCombination";
import ExamResult from "../Models/ExamResult";
import Users from "../Models/Users";
import ResultsAPI from "../API.Interaction/ResultsAPI";
import Exams from "../API.Interaction/ExamsAPI";

export default function({navigation, route}: any){

    const {auth, setToken, setAuth, token, changeLoading} = useContext(AuthenticationContext);

    const [result, setResult] = useState<ExamResult | undefined>();
    const [exam, setExam] = useState<Exam | undefined>();
    const [questions, setQuestions] = useState<ExamQuestionCombination[]>([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        
        setTimeout(() => {changeLoading(true);}, 1);
        
        let getExam = async () => {
            
            try {

                let response = await ResultsAPI.find(route.params.result_id, token);
                setResult(response.result);

            }catch ({message}){
                console.log(message);
            }

            try {

                let response = await Exams.find(route.params.exam_id);
                setExam(response.exam);
                setQuestions(response.questions);

            }catch ({message}){
                console.log(message);
            }

            changeLoading(false);

        };

        getExam();

    }, []);

    const giveAnswer = async (choice_id: number, question_id: number) => {

        try {

            await ResultsAPI.answerQuestion({
                choice: choice_id,
                result_id: route.params.result_id,
                question: question_id,
                token: token
            });

            if((questions.length - 1) === count){
                navigation.push("ResultDetail" + (result ? result.id : ""));
                return;
            }

            setCount(count + 1);

        }catch ({message}){
            console.log(message);
        }

    };

    return (
        <View>
            <AppBar navigation={navigation} />
            <View style={style.screenContainer}>
                {questions.length > 0 ? (<Question question_id={questions[count] ? questions[count].question : 0} answer={giveAnswer} />) : ""}
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    screenContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20
    }
});