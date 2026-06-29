import { WEATHER_GRADIENTS } from "../constants/weathertheme"
export function GetBackgroundGradient(CurrentWether){
 if(CurrentWether){
    const condition = CurrentWether.weather[0].main;
    return WEATHER_GRADIENTS[condition] || WEATHER_GRADIENTS.default ;
 }
 return WEATHER_GRADIENTS
}