import * as Location from 'expo-location';

export async function getcurrentPosition() {
    const {status} = await Location.requestBackgroundPermissionsAsync();
    if(!status !== "granted" ){
        return {
            success : false,
            message : 'permission-deny'
        }
    }

    const location = await Location.getCurrentPositionAsync();
    return {
        success: true,
        location 
    }

}