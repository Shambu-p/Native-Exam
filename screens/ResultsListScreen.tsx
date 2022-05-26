import { View } from "react-native";
import AppBar from "../components/AppBar";
import ResultCard from "../components/ResultCard";

export default function(props: any){
    
    return(
        <View>
            <AppBar navigation={props.navigation} />
            <View style={{paddingHorizontal: 20, marginTop: 10}}>
                <ResultCard exam={{
                    id: 0,
                    title: "the title",
                    data: 124,
                    subject: "the course",
                    description: "Here is the description",
                    count: 1
                }} navigate={props.navigation} />

                <ResultCard exam={{
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