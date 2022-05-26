import { StyleSheet, View } from "react-native";
import AppBar from "../components/AppBar";
import Question from "../components/Question";

export default function(props: any){

    const style = StyleSheet.create({
        screenContainer: {
            width: '100%',
            paddingHorizontal: 20,
            paddingVertical: 20
        }
    });

    return (
        <View>
            <AppBar navigation={props.navigation}/>
            <View style={style.screenContainer}>
                <Question />
                <Question />
            </View>
        </View>
    );
}