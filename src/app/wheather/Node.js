const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://weather-api-by-any-city.p.rapidapi.com/weather/pune',
    headers: {
        'X-RapidAPI-Key': '4c9ec2bd2amsha27b69266ad3e25p16346djsnb71ae721cb5f',
        'X-RapidAPI-Host': 'weather-api-by-any-city.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
