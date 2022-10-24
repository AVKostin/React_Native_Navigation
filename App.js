import React from "react";
import LoginScreen from "./screens/auth/LoginScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

export default function App() {
    return (
        <AuthStack>
            <NavigationContainer>
                <AuthStack.Screen name="Login" component={LoginScreen} />
                <AuthStack.Screen
                    name="Register"
                    component={RegistrationScreen}
                />
            </NavigationContainer>
        </AuthStack>
    );
}
