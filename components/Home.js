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

import { styles } from "./Home.module";

const initialState = {
    email: "",
    password: "",
};

export default function LoginScreen({ navigation }) {
    // console.log(Platform.OS);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);

    // const { width, height } = Dimensions.get("window");
    // const imageStyle = {
    //     width: width < height ? width : height,
    //     height: width < height ? height : width,
    //     resizeMode: "stretch",
    // };

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
                            <Text style={styles.headerTitle}>Войти</Text>
                        </View>
                        <View>
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
                            <Text style={styles.btnTitle}>Войти</Text>
                        </TouchableOpacity>
                        <View style={styles.header}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Register")}
                                activeOpacity={0.5}
                                style={styles.headerEnter}
                            >
                                <Text title="register">
                                    Нет аккаунта? Зарегистрироваться
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}
