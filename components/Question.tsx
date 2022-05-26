import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NiceButton from "./NiceButton";
import RadioButtons from "./RadioButtons";

export default function(){

    const [choiceValue, setChoice] = useState<number | string | boolean>(1);

    const style = StyleSheet.create({
        card: {
            backgroundColor: 'white',
            width: '100%',
            height: 'auto',
            padding: 10,
            marginBottom: 10,
            borderRadius: 8,
        },
        title: {
            fontSize: 30,
            width: '100%',
            marginBottom: 10,
            fontFamily: 'sans-serif',
            fontWeight: '400'
        }
    });

    const select = (value: number | string | boolean) => {
        setChoice(value);
    };

    return (
        <View style={style.card}>
            <Text style={style.title}>The question will be here</Text>
            <RadioButtons text="choice 1" value={1} currentValue={choiceValue} onPress={select}/>
            <RadioButtons text="choice 2" value={2} currentValue={choiceValue} onPress={select}/>
            <RadioButtons text="choice 3" value={3} currentValue={choiceValue} onPress={select}/>
            <NiceButton text="Answer" style={{marginLeft: 'auto'}}/>
        </View>
    );
}