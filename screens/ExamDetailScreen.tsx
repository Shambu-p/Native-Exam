import { StyleSheet, Text, View } from "react-native";
import NiceButton from "../components/NiceButton";

export default function(props: any){

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

    return(
        <View style={{width: '100%', paddingHorizontal: 20, paddingTop: 20}}>
            <View style={style.container}>
                <Text style={style.title}>Title</Text>
                <Text style={style.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cumque voluptatibus veritatis quas vero culpa obcaecati 
                    quidem modi quo nostrum laborum, sequi vitae beatae odit 
                    exercitationem! Numquam rerum doloremque odio repellat.
                </Text>
                <NiceButton text="Take Exam" color="black" size="block" />
            </View>
        </View>
    );

}