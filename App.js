import React from "react";
import LoginScreen from "./screens/auth/LoginScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Login"
                    component={LoginScreen}
                />
                <AuthStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Register"
                    component={RegistrationScreen}
                />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}
