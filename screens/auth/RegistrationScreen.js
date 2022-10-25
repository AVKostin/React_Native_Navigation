import React, { useState } from "react";
import {
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./RegistrationScreen.module";

const initialState = {
    email: "",
    login: "",
    password: "",
};

export default function RegistrationScreen({ navigation }) {
    // console.log("navigation: ", navigation);

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
                    <Text style={styles.add}>+</Text>
                    <Text style={styles.cicle}></Text>
                    <View style={styles.avatar}></View>
                    <View
                        style={{
                            ...styles.form,
                            marginBottom: isShowKeyboard ? 20 : 150,
                        }}
                    >
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Регистрация</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Логин"
                                onFocus={() => setIsShowKeyboard(true)}
                                value={state.login}
                                onChangeText={(value) =>
                                    setState((prevState) => ({
                                        ...prevState,
                                        login: value,
                                    }))
                                }
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <TextInput
                                style={styles.input}
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
                            <TextInput
                                style={styles.input}
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
                        <View style={styles.header}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                                activeOpacity={0.5}
                                style={styles.headerEnter}
                            >
                                <Text title="Login">
                                    {" "}
                                    Уже есть аккаунт? Войти
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}
