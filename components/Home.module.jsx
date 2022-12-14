import React, { useState } from "react";
import {
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    Platform,
    Dimensions,
} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        // position: "absolute",
        left: 0,
        top: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    avatar: {
        width: 120,
        height: 120,
        left: 134,
        top: 203,
        zIndex: 1,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    add: {
        color: "#ff6c00",
        width: 25,
        height: 25,
        left: 241,
        top: 313,
        zIndex: 2,
        fontSize: 26,
        textAlign: "center",
        fontWeight: "200",
        transform: [{ translateY: 18 }],
    },
    cicle: {
        color: "#ff6c00",
        width: 25,
        height: 25,
        left: 241,
        top: 313,
        zIndex: 2,
        borderWidth: 1,
        borderColor: "#ff6c00",
        fontSize: 26,
        borderRadius: 100,
    },
    input: {
        borderWidth: 1,
        borderColor: "#f0f8ff",
        height: 50,
        borderRadius: 6,
        fontColor: "#bdbdbd",
        marginHorizontal: 16,
        textAlign: "left",
        paddingLeft: 16,
        backgroundColor: "#eaeaea",
    },
    form: {
        marginHorizontal: 0,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 489,
        top: 150,
        justifyContent: "flex-end",
    },
    inputTitle: {
        // color: "#bdbdbd",
        marginBottom: 16,
        fontSize: 16,
        marginLeft: 0,
    },
    btn: {
        borderRadius: 100,
        borderWidth: 1,
        height: 51,
        marginTop: 43,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 16,
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
        fontSize: 16,
    },
    header: {
        alignItems: "center",
        marginBottom: 32,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#212121",
    },
    headerEnter: {
        fontSize: 18,
        color: "#1B4371",
        marginBottom: 111,
    },
});

import { styles } from "./LoginScreen";

const initialState = {
    email: "",
    password: "",
};

export default function Home({ navigation }) {
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
                            <Text style={styles.headerTitle}>??????????</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="?????????? ?????????????????????? ??????????"
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
                                placeholder="????????????"
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
                            <Text style={styles.btnTitle}>??????????</Text>
                        </TouchableOpacity>
                        <View style={styles.header}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Register")}
                                activeOpacity={0.5}
                                style={styles.headerEnter}
                            >
                                <Text title="register">
                                    ?????? ????????????????? ????????????????????????????????????
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}
