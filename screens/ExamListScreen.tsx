import { View } from "react-native";
import AppBar from "../components/AppBar";
import ExamCard from "../components/ExamCard";

export default function(props: any){
    
    return(
        <View>
            <AppBar />
            <View style={{paddingHorizontal: 20, marginTop: 10}}>
                <ExamCard exam={{
                    id: 0,
                    title: "the title",
                    data: 124,
                    subject: "the course",
                    description: "Here is the description",
                    count: 1
                }} navigate={props.navigation} />

                <ExamCard exam={{
                    id: 0,
                    title: "the title",
                    data: 124,
                    subject: "the course",
                    description: "Here is the description",
                    count: 1
                }} navigate={props.navigation} />
            </View>
        </View>
    );
}