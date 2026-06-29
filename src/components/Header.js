import {View, Text, TouchableOpacity} from "react-native";
import { styles } from "../Styles/globalStyles";
export default function Header({
    onLocationPress,loading
}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}> WeatherKub123456789</Text>
            <TouchableOpacity
            onPress={onLocationPress}
            disabled={loading}
            >
            <Text style={styles.locationButton}>🤕</Text>
            </TouchableOpacity>
        </View>
    );
}