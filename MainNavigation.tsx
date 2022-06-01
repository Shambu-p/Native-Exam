// import { Ionicons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { createContext, useEffect, useState } from 'react';
import Users from './Models/Users';
import {information} from './API.Interaction/AuthAPI';
// import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import * as cookies from './cookies';
import AuthenticationContext from './Context/AuthenticationContext';
import Spinner from 'react-native-loading-spinner-overlay';

export default function myPage(){

    const Stack = createNativeStackNavigator();
    // const AuthenticationContext = createContext({});
    // const Stack = createBottomTabNavigator();

    // const storage = new MMKVStorage.Loader().initialize();
    // const storage = cookies.get("logged_user");
    const [auth, setAuth] = useState<{
        users: (Users | null), 
        isLoggedIn: boolean
    }>({
        users: null,
        isLoggedIn: false
    });

    // const [token, setToken] = useMMKVStorage("token", storage, "");
    const [token, setToken] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        
        let tk = cookies.get("logged_user");
        setToken(tk);

        // console.log(tk);

        let checkAuth = async () => {
            
            if(!tk){

                setAuth({
                    isLoggedIn: false,
                    users: null
                });
                return;

            }

            let response = await information(tk);

            setAuth({
                isLoggedIn: response.status,
                users: response.data
            });

        };

        checkAuth();

    }, [cookies.get("logged_user")]);

    const changeLoading = (loading: boolean) => {
        setLoading(loading);
    }

    return (
        <AuthenticationContext.Provider value={{auth, setAuth, setToken, token, changeLoading}}>

            <ScrollView style={{
                    flex: 1, 
                    backgroundColor: '#c0c1c2', 
                    width: "100%", 
                    height: Layout.window.height
                }}
            >

                <NavigationContainer>
                    <Stack.Navigator>

                        {!auth.isLoggedIn ? (<Stack.Screen name="Home" component={HomeScreen} />) : (<></>)}
                        {!auth.isLoggedIn ? (<Stack.Screen name="Login" component={LoginScreen} />) : (<></>)}
                        {!auth.isLoggedIn ? (<Stack.Screen name="Registration" component={RegistrationScreen} />) : (<></>)}

                        {auth.isLoggedIn ? (<Stack.Screen name="Menu" component={MenuScreen} />) : <></>}
                        {auth.isLoggedIn ? (<Stack.Screen name="ExamList" component={ExamListScreen} />) : <></>}
                        {auth.isLoggedIn ? (<Stack.Screen name="ExamDetail" component={ExamDetailScreen} />) : <></>}
                        {auth.isLoggedIn ? (<Stack.Screen name="ExamTaking" component={ExamTakingScreen} />) : <></>}
                        {auth.isLoggedIn ? (<Stack.Screen name="ResultList" component={ResultsListScreen} />) : <></>}
                        {auth.isLoggedIn ? (<Stack.Screen name="ResultDetail" component={ResultDetailScreen} />) : <></>}
                        {auth.isLoggedIn ? (<Stack.Screen name="Account" component={AccountScreen} />) : <></>}
                        
                    </Stack.Navigator>
                </NavigationContainer>

                {loading ? (<Spinner 
                    //visibility of Overlay Loading Spinner
                    visible={true}
                    //Text with the Spinner
                    // textContent={'Loading...'}
                    //Text style of the Spinner Text
                    textStyle={{color: '#FFF'}}
                />): ""}
            </ScrollView>

        </AuthenticationContext.Provider>
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