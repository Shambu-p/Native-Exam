import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import Layout from './constants/Layout';
import AccountScreen from './screens/AccountScreen';
import ExamDetailScreen from './screens/ExamDetailScreen';
import ExamListScreen from './screens/ExamListScreen';
import ExamTakingScreen from './screens/ExamTakingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ResultDetailScreen from './screens/ResultDetailScreen';
import ResultsListScreen from './screens/ResultsListScreen';

export default function myPage(){

    const Stack = createNativeStackNavigator();
    // const Stack = createBottomTabNavigator();

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#c0c1c2', width: "100%", height: Layout.window.height}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Menu">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Registration" component={RegistrationScreen} />
                    <Stack.Screen name="ExamList" component={ExamListScreen} />
                    <Stack.Screen name="ExamDetail" component={ExamDetailScreen} />
                    <Stack.Screen name="ExamTaking" component={ExamTakingScreen} />
                    <Stack.Screen name="ResultList" component={ResultsListScreen} />
                    <Stack.Screen name="ResultDetail" component={ResultDetailScreen} />
                    <Stack.Screen name="Menu" component={MenuScreen} />
                    <Stack.Screen name="Account" component={AccountScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ScrollView>
    );

}


/*
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
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveTintColor: 'gray'
                    })}
*/