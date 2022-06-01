import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Exams from "../API.Interaction/ExamsAPI";
import AppBar from "../components/AppBar";
import ExamCard from "../components/ExamCard";
import AuthenticationContext from "../Context/AuthenticationContext";
import Exam from "../Models/Exam";

export default function(props: any){

    const {auth, setToken, setAuth, token} = useContext(AuthenticationContext);
    
    const [exams, setExam] = useState<Exam[]>([]);

    useEffect(() => {
        let getExams = async () => {

            // let auth = await loginAuth();

            try {

                let response = await Exams.all();
                setExam(response);

            }catch ({message}){
                console.log(message);
            }
        };

        getExams();

    }, []);

    let exam_components = exams.map( (exam: Exam) => {
        
        return (
            <ExamCard 
                exam={exam} 
                navigate={ props.navigation } 
            />
        );

    });
    
    return(
        <View>
            <AppBar navigation={props.navigation} />
            <View style={{paddingHorizontal: 20, marginTop: 10}}>
                {exam_components}
            </View>
        </View>
    );
}