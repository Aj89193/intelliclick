# intelliclick
Weather Application
This project is a web application that allows users to search for weather information in cities around the world. It uses the OpenWeatherMap API to fetch live weather data and displays it in a user-friendly table format. The project is built with React, Axios, and React Bootstrap for UI components and styling.

Features
City Search: Users can search for any city in the world to get detailed weather information.
Paginated City List: The application lists cities, and users can load more cities as needed.
Live Weather Data: Clicking on a city name brings up detailed weather information fetched from OpenWeatherMap.
Responsive Design: The app uses Bootstrap to ensure that the design is responsive and user-friendly across different devices.
Project Structure
CityTable: Displays a searchable and paginated list of cities.
WeatherPage: Displays detailed weather data for a selected city.
Technologies Used
React: For building the user interface.
Axios: For making HTTP requests to fetch data from the OpenWeatherMap API.
React Router: For navigation and routing between pages.
Bootstrap: For styling and UI components.
OpenWeatherMap API: For fetching real-time weather information.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/weather-app.git
cd weather-app
Install dependencies:

bash
Copy code
npm install
Get your OpenWeatherMap API key:

Visit OpenWeatherMap and sign up to get your API key.
Replace the YOUR_API_KEY variable in the WeatherPage.tsx component with your actual API key.
Run the application:

bash
Copy code
npm start
The application should now be running on http://localhost:3000.

Usage
Search Cities:

Use the search bar to search for a city by name.
View Weather Data:

Click on the city name to view detailed weather information like temperature, humidity, wind speed, and more.
Code Overview
CityTable Component
The CityTable component fetches a list of cities and displays them in a paginated table. It allows users to search for cities and fetches the next batch of cities when the Load More button is clicked.

Key features:

Fetches cities using Axios from the OpenDataSoft API.
Displays cities in a table with a search feature.
Clicking on a city name navigates to the detailed weather page for that city.
WeatherPage Component
The WeatherPage component fetches the weather data for a specific city from the OpenWeatherMap API and displays it.

Key features:

Fetches weather data such as temperature, humidity, wind speed, and more.
Displays the weather data in a Bootstrap card format.
API Integration
OpenDataSoft API: Fetches the list of cities with a population of more than 1,000.
OpenWeatherMap API: Fetches the weather details for a specific city.
Contributing
If you'd like to contribute to this project, please fork the repository and create a pull request.

