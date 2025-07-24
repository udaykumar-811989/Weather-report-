function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = `
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].description}</p>
      `;
      document.getElementById('weatherResult').innerHTML = weather;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerText = 'City not found!';
    });
}