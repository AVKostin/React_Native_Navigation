import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";

const initialState = {
    email: "",
    password: "",
};

export default function LoginScreen() {
    console.log(Platform.OS);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
        setState(initialState);
    };

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    source={require("../../assets/images/BG_Mountings.jpg")}
                >
                    <View
                        style={{
                            ...styles.form,
                            marginBottom: isShowKeyboard ? 20 : 150,
                        }}
                    >
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Регистрация</Text>
                            {/* <Text style={styles.headerTitle}>Welcome back</Text> */}
                        </View>
                        <View>
                            {/* <Text style={styles.inputTitle}>EMAIL ADDRES</Text> */}
                            <TextInput
                                style={styles.input}
                                textAlign={"center"}
                                placeholder="Адрес электронной почты"
                                onFocus={() => setIsShowKeyboard(true)}
                                value={state.email}
                                onChangeText={(value) =>
                                    setState((prevState) => ({
                                        ...prevState,
                                        email: value,
                                    }))
                                }
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            {/* <Text style={styles.inputTitle}>PASSWORD</Text> */}
                            <TextInput
                                style={styles.input}
                                textAlign={"center"}
                                placeholder="Пароль"
                                secureTextEntry={true}
                                onFocus={() => setIsShowKeyboard(true)}
                                value={state.password}
                                onChangeText={(value) =>
                                    setState((prevState) => ({
                                        ...prevState,
                                        password: value,
                                    }))
                                }
                            />
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.btn}
                            onPress={keyboardHide}
                        >
                            <Text style={styles.btnTitle}>
                                Зарегистрироваться
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.headerEnter}>
                            Уже есть аккаунт? Войти
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        // justifyContent: "center",
        // alignItems: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#f0f8ff",
        height: 40,
        borderRadius: 6,
        color: "#f6f6f6",
        marginHorizontal: 40,
    },
    form: {
        marginHorizontal: 0,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 549,
        top: 63,
        justifyContent: "flex-end",
    },
    inputTitle: {
        color: "#f0f8ff",
        marginBottom: 16,
        fontSize: 18,
    },
    btn: {
        borderRadius: 100,
        borderWidth: 1,
        height: 51,
        marginTop: 43,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 40,
        marginBottom: 16,
        ...Platform.select({
            ios: {
                backgroundColor: "transparent",
                borderColor: "#f0f8ff",
            },
            android: {
                backgroundColor: "#ff6c00",
                borderColor: "transparent",
            },
        }),
    },
    btnTitle: {
        color: Platform.OS === "ios" ? "#ffa500" : "#f0f8ff",
        fontSize: 18,
    },
    header: {
        alignItems: "center",
        marginBottom: 32,
    },
    headerTitle: {
        fontSize: 30,
        color: "#212121",
    },
    headerEnter: {
        fontSize: 18,
        color: "#1B4371",
        justifyContent: "center",
    },
});
