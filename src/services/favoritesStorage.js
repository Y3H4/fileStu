import AsyncStorage from "@react-native-async-storage/async-storage"; 

const STORAGE_KEY = 'weatherFavorite'

export async function LoadFavorite() {
    try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.log(' Error')
        return []
    }
}

export async function favorite(favorite) {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify, favorite)
    } catch (error) {
        console.log("can't saves Favorite")
    }


}