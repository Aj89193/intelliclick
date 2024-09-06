# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


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

License