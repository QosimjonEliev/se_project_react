export const weatherOptions = [
  {
    url: require("../images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/day/storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../images/day/rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../images/day/snow.svg").default,
    day: true,
    type: "snow",
  },
  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },

  {
    url: require("../images/night/sunny.svg").default,
    day: false,
    type: "sunny",
  },
  {
    url: require("../images/night/cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/night/snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/night/fog.svg").default,
    day: false,
    type: "fog",
  },
];

export const APIkey = "5bb8f31f1d57277bd49e602f1fbcb48a";
export const latitude = 40.6421504;
export const longitude = -73.9475456;
export const baseUrl = "http://localhost:3001";

export const getWeatherType = (weatherTemp) => {
  if (weatherTemp >= 86) {
    return "hot";
  } else if (weatherTemp >= 66 && weatherTemp <= 85) {
    return "warm";
  } else if (weatherTemp <= 65) {
    return "cold";
  }
};
