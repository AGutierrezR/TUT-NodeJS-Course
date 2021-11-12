const forecastInfo = ({ current, forecast: { forecastday } }) => {
  const { day } = forecastday[0]
  return `${current.condition.text}. It is currently ${current.temp_c} degress out. There is ${day.daily_chance_of_rain}% chance of rain`
}

module.exports = forecastInfo
