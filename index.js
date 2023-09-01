import express from 'express';
import axios from 'axios';
import { publicIpv4 } from 'public-ip';
import { weatherConditionData } from './weatherConditionData.js';

const app = express();
const port = 3000;
const address = '127.0.0.1';
const apiKey = 'your api key';

app.get('/v1/weather', async (req, res) => {
  try {
    const ipAddress = await publicIpv4();   //fetching public IPV4 address of user
    const ipData = await axios.get(`http://ipinfo.io/${ipAddress}/json`);       //fetching ipAddress details
    const openWeatherCall = `https://api.openweathermap.org/data/2.5/weather?q=${ipData.data.city}&units=imperial&appid=${apiKey}`;

    const respondFromOpenWeather = await axios.get(openWeatherCall);        //storing response from openWeather API
    const weatherIconCode = respondFromOpenWeather.data.weather[0].icon;

    const weatherCondition = weatherConditionData[weatherIconCode] || '❓'; // Default emoji if icon code not found
    res.status(200).json(weatherCondition);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch API Data' });
  }
});

app.listen(port, address, () => {
  console.log(`Listening on port ${port}`);
});
