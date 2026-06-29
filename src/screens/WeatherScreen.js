import {
    SafeAreaView
} from "react-native";

import {LinearGradient} from "expo-linear-gradient";

import Header from "../components/Header";

export default function WeatherScreen() {

    return (
        <LinearGradient
            colors={["#4facfe", "#00f2fe"]}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
            </SafeAreaView>
        </LinearGradient>
    );
}