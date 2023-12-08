import { checkResponse } from './api'
export const getForcastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse)

  return weatherApi
}

export const parseWeatherData = (data) => {
  const main = data.main
  const temperature = main && main.temp
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  }
  return weather
}

export const parseLocationData = (data) => {
  const locationName = data.name
  return locationName
}

const latitude = 40.6421504
const longitude = -73.9475456
const APIkey = '5bb8f31f1d57277bd49e602f1fbcb48a'