import { View } from "react-native";
import AppBar from "../components/AppBar";
import ExamCard from "../components/ExamCard";
import QuestionResult from "../components/QuestionResult";

export default function(props: any){
    
    return(
        <View>
            <AppBar navigation={props.navigation} />
            <View style={{paddingHorizontal: 20, marginTop: 10}}>
                <QuestionResult />
                <QuestionResult />
            </View>
        </View>
    );
}