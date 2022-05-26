import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function(props: {
    onPress: (value: number | string | boolean) => void,
    value: (string | number | boolean),
    currentValue: (string | number | boolean),
    text: string,
    color?: string
}){

    const style = StyleSheet.create({
        buttonContainer: {
            width: 'max-content',
            height: 'max-content',
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginBottom: 5,
            flexDirection: 'row'
        },
        
        button: {
            width: 30,
            height: 30,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: props.color ?? '#196ffa',
            marginRight: 10
        },

        innerButton: {
            borderRadius: 100,
            width: 20,
            height: 20,
            backgroundColor: props.color ?? '#196ffa',
            marginVertical: 'auto',
            marginHorizontal: 'auto'
        },

        buttonText: {
            width: '100%',
            fontSize: 25,
            fontWeight: '100',
            fontFamily: 'sans-serif',
        }
    });

    return (
        <TouchableOpacity style={style.buttonContainer} onPress={() => {props.onPress(props.value)}}>
            <View style={style.button}>
                {(props.value == props.currentValue) ? (<View style={style.innerButton}></View>) : ""}
            </View>
            <Text style={style.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );

}