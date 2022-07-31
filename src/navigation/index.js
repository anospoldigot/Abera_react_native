// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// =========================Screen===========================
import Auth from '../screens/Auth';
import Home from '../screens/Home';
import Login from '../screens/Login';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth' screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Auth" component={Auth} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;