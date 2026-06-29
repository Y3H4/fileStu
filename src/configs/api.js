export const API_KEY = '02c892b2f6a89b6ee5219738fe96aef7'
export const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export function IsapiKeyConfig(){
    return Boolean (API_KEY && BASE_URL !== '02c892b2f6a89b6ee5219738fe96aef7' )
}