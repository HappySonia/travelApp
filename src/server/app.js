/* Empty JS object to act as endpoint for all routes */
let projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

//const fetch = require('node-fetch')
//from https://stackoverflow.com/questions/69055506/how-to-fix-must-use-import-to-load-es-module-discord-js
const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));

/* Initialize the main project folder*/
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// POST route
app.post('/postData', postData);

async function postData(req, res) {
    // when you realize the value of the variable will be changed you need to use let ,not const.
    let city = req.body.City;
    let startDate = new Date(req.body.Start);
    let endDate = new Date(req.body.End);


    let tripTime = endDate.getTime() - startDate.getTime();
    let tripDays = `${tripTime/ (1000 * 60 * 60 *24)} days`;

    let today = new Date(); //initial today 
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = new Date(mm + '/' + dd + '/' + yyyy); // use new Date function to transfer string to date
    console.log(today);
    console.log(startDate);
    let timeDiff = startDate.getTime() - today.getTime();
    console.log(timeDiff)
    let daysDiff = `${timeDiff / (1000 * 60 * 60 *24)} days`;
    console.log(daysDiff);

    let baseURL1 = "http://api.geonames.org/searchJSON?q=";
    let geoNameData = {};
    const getCoordinates = async(key) => {
        const result = await fetch((baseURL1 + city + "&maxRows=1&username=" + process.env.API_Key_GeoNames), { method: 'GET' })
        try {
            const data = await result.json();
            console.log(data);
            geoNameData = {
                lng: data.geonames[0].lng,
                lat: data.geonames[0].lat,
            }
            console.log(geoNameData);
        } catch (error) {
            console.log("getCoordinates failed ", error);
        }
    }
    await getCoordinates(city);

    let baseURL2 = "http://api.weatherbit.io/v2.0/forecast/daily?";
    let weatherBitData = {};
    const getWeatherbit = async() => {

        const result = await fetch((baseURL2 + "lat=" + geoNameData.lat + "&lon=" + geoNameData.lng + "&key=" + process.env.API_Key_Weatherbit + "&units=M"), { method: 'GET' })
        try {
            const data = await result.json();
            console.log(data);
            weatherBitData = {
                temp: data.data[0].temp,
                weather: data.data[0].weather.description,
                icon: data.data[0].weather.icon
            }
        } catch (error) {
            console.log("getWeatherbit failed ", error);
        }
    }
    await getWeatherbit();

    let baseURL3 = "https://pixabay.com/api/?key=";
    let pixaBayData = ' ';
    const getImage = async() => {
        const result = await fetch(baseURL3 + process.env.API_Key_Pixabay + "&q=" + city + "&image_type=photo")
        try {
            const data = await result.json();
            console.log(data);
            pixaBayData = {
                img: data.hits[0].webformatURL
            }
        } catch (error) {
            console.log("getImage failed ", error);
        }
    }
    await getImage();

    projectData = {
        temp: weatherBitData.temp,
        weather: weatherBitData.weather,
        icon: weatherBitData.icon,
        img: pixaBayData.img,
        daysDiff: daysDiff,
        place: city,
        tripDays: tripDays
    }
    res.send(projectData);
    console.log(projectData);
}
try { 
        console.log('everything is good') 
    } catch (error) {
        console.log("postData function is not completed", error);
    };

// GET route
app.get('/all', sendData);

function sendData(request, response) {
    response.send(projectData);
    console.log(projectData);
};

module.exports = app;