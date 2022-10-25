import { StyleSheet, Platform, Dimensions } from "react-native";

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
