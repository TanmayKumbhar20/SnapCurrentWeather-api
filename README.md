<div align="center">


</div>

##

# 🌤️ Weather Condition API

A RESTful Express.js API for Weather Conditions Based on Current Weather at current location.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Usage](#api-usage)
- [Weather Conditions](#weather-conditions)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Overview

Welcome to the **Current Weather Condition API** ! This project presents a streamlined Express.js API that fetches weather data using the user's public IP address and returns precise weather conditions based on the current weather icon codes. The API seamlessly demonstrates the process of orchestrating API requests, handling data, and delivering responses with Express, offering both simplicity and utility.

## Features

- 🌟 **Effortless Weather Fetching**: The API effortlessly retrieves weather data based on the user's public IP address.
- ⛅ **Accurate Weather Conditions**: Offers precise weather conditions determined by current weather icon codes.
- 🌐 **RESTful Architecture**: Adheres to REST-like practices by utilizing the HTTP GET method for resource retrieval.
- 🚀 **Exemplary Express Usage**: Demonstrates exemplary usage of Express.js for building a practical API.
- 🎨 **Minimalist Design**: Embraces simplicity while providing a potent solution for weather data retrieval.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Tanixon-Enigma/current-weather-condition-api.git
   ```

2. **Install Dependencies**:

   ```bash
   cd current-weather-condition-api
   npm install
   ```

3. **Obtain an OpenWeather API Key**:

   🛡️ Acquire your OpenWeather API key and update `apiKey` in `index.js`:

   ```javascript
   const apiKey = 'YOUR_OPENWEATHER_API_KEY';
   ```

4. **Run the Server**:

   🏃‍♀️ Start the server by running:

   ```bash
   npm start
   ```

5. **View the Results**:

   - 🌐 Open your preferred web browser.
   - 🖥️ In the browser's address bar, enter:

     ```
     http://localhost:3000/v1/weather
     ```

   - 📜 You'll receive a response with the weather conditions based on the current weather icon codes. The conditions are defined in `weatherData.js`.

## API Usage

To fetch weather conditions, make a GET request to the API endpoint `/v1/weather`. The API responds with weather conditions corresponding to the current weather icon codes.

## Weather Conditions

The API returns precise weather conditions based on the weather icon codes. Check the definitions in `weatherData.js` for detailed information.

## Dependencies

- 🌐 [Express.js](https://expressjs.com/)
- 📦 [axios](https://axios-http.com/)
- 🌍 [public-ip](https://www.npmjs.com/package/public-ip)

##
