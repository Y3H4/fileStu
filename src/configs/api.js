const apiKey = '02c892b2f6a89b6ee5219738fe96aef7'
const BaseUrl = 'https://home.openweathermap.org/api_keys'

IsapiKeyConfig = () => {
    return Boolean (apiKey && BaseUrl !== 'ใส่ api key ของคุณที่นี่')
}