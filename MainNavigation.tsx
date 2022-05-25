import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import Layout from './constants/Layout';
import ExamDetailScreen from './screens/ExamDetailScreen';
import ExamListScreen from './screens/ExamListScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';

export default function myPage(){

    // const Stack = createNativeStackNavigator();
    const Stack = createBottomTabNavigator();

    return (
        <ScrollView style={{backgroundColor: '#c0c1c2', width: "100%", height: Layout.window.height}}>
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="Home" 
                    screenOptions={({route}: any) => ({
                        tabBarIcon: ({focused, color, size}: any) => {
                            let iconName;
                            let rn = route.name;

                            if(rn === "Home"){
                                iconName = focused ? "home" : "home-outline";
                            }else if(rn === "Login"){
                                iconName = focused ? "person" : "person-outline";
                            }else if(rn === "Registration"){
                                iconName = focused ? "person" : "person-outline";
                            }

                            return <Ionicons name={iconName} size={size} color={color}/>
                        },
                    })}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Registration" component={RegistrationScreen} />
                    <Stack.Screen name="ExamList" component={ExamListScreen} />
                    <Stack.Screen name="ExamDetail" component={ExamDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ScrollView>
    );

}


/*

*/