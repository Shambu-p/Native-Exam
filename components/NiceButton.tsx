import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet, GestureResponderEvent } from "react-native";

export default function ({text, style, onPress, color, size}: {
    text: string, 
    style?: any, 
    color?: string, 
    size?: ("block" | "lg" | "sm" | "md"), 
    onPress?: (event: GestureResponderEvent) => void
}){

    const [myStyle, setStyle] = useState<any>({});
    useEffect(() => {

        switch(size ?? "md"){
            case "lg":
                setStyle({
                    container: {
                        borderRadius: 8,
                        width: 'max-content',
                        paddingHorizontal: 15,
                        paddingVertical: 8,
                        backgroundColor: (color ?? "#196ffa"),
                    },

                    buttonText: {
                        fontSize: 35,
                        fontWeight: '200',
                        fontFamily: 'Helvetica',
                        color: 'white'
                    }
                });
                break;
            case "block":
                setStyle({
                    container: {
                        borderRadius: 8,
                        width: '100%',
                        paddingHorizontal: 15,
                        paddingVertical: 8,
                        backgroundColor: (color ?? "#196ffa"),
                        textAlign: 'center',
                    },

                    buttonText: {
                        fontSize: 20,
                        fontWeight: '400',
                        fontFamily: 'Helvetica',
                        color: 'white'
                    }
                });
                break;
            case "sm":
                setStyle({
                    container: {
                        borderRadius: 5,
                        width: 'max-content',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        backgroundColor: (color ?? "#196ffa"),
                    },

                    buttonText: {
                        fontSize: 15,
                        fontWeight: '200',
                        fontFamily: 'Helvetica',
                        color: 'white'
                    }
                });
                break;
            default:
                setStyle({
                    container: {
                        borderRadius: 8,
                        width: 'max-content',
                        paddingHorizontal: 15,
                        paddingVertical: 8,
                        backgroundColor: (color ?? "#196ffa"),
                    },

                    buttonText: {
                        fontSize: 20,
                        fontWeight: '200',
                        fontFamily: 'Helvetica',
                        color: 'white'
                    }

                });
        };

    }, []);

    return (
        <TouchableOpacity style={{width: 'max-content', ...style}} onPress={onPress}>
            <View style={myStyle.container}>
                <Text style={myStyle.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );

}