import React, { useState } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    TouchableWithoutFeedback, // импорт компонента обертки
    Keyboard, // импорт компонента клавиатуры
    KeyboardAvoidingView,
    Platform,
    Alert,
    Button,
} from "react-native";

export default function App() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [value, setValue] = useState("");
    const loginHandler = (text) => setValue(text);
    const passwordHandler = (text) => setValue(text);

    const onLogin = () => {
        Alert.alert("Credentials", `${login} + ${password}`);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <TextInput
                        placeholder="Username"
                        value={login}
                        onChangeText={loginHandler}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={passwordHandler}
                        style={styles.input}
                    />
                    <Button
                        title={"Login"}
                        style={styles.btn}
                        onPress={onLogin}
                    />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 30,
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 6,
        marginBottom: 10,
    },
    btn: {
        borderWidth: 1,
        borderRadius: 20,
    },
});
