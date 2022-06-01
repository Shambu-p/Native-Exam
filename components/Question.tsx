import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Questions from "../API.Interaction/QuestionsAPI";
import Choice from "../Models/Choice";
import Question from "../Models/Question";
import NiceButton from "./NiceButton";
import RadioButtons from "./RadioButtons";

export default function(props: {question_id: number, answer: Function}){

    const [question, setQuestion] = useState<Question | undefined>();
    const [choices, setChoices] = useState<Choice[]>([]);
    const [choiceValue, setChoice] = useState<number | string | boolean | undefined>();

    useEffect(() => {

        let getQuestion = async () => {

            try {

                let response = await Questions.find(props.question_id);

                setQuestion(response.question);
                setChoices(response.choices);

            }catch ({message}){
                console.log(message);
            }

        };

        getQuestion();

    }, []);

    const select = (value: number | string | boolean) => {
        setChoice(value);
    };

    /*let choiceComponents = choices.map(choice => {
        return (<RadioButtons text={choice.text} value={choice.id} currentValue={choiceValue ?? 0} onPress={select} key={choice.id} />);
    });*/

    return (
        <View style={style.card}>
            <Text style={style.title}>{question ? question.text : "question not found!!!"}</Text>
            {/*choiceComponents*/}
            <NiceButton text="Answer" style={{marginLeft: 'auto'}} onPress={() => {props.answer(choiceValue ?? 0, props.question_id);}}/>
        </View>
    );
}

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

/*
<RadioButtons text="choice 1" value={1} currentValue={choiceValue} onPress={select}/>
<RadioButtons text="choice 2" value={2} currentValue={choiceValue} onPress={select}/>
<RadioButtons text="choice 3" value={3} currentValue={choiceValue} onPress={select}/>
*/