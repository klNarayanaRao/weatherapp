const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eeba131066msh176c69af8b6d591p12fa03jsn62d8c77f362a",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

try {
    let city = document.querySelector('#city-text')
    let cityname = document.querySelector('#city-name')
    let button = document.querySelector('#search-button')
    
    // updating data in card when "Search" button is clicked
    button.addEventListener('click',async () => {
        let resultData = await fetchdata(city.value);
        displaySearchData(resultData);
        cityname.textContent = city.value // update heading
    })
} catch (error) {
  console.error(error);
}

// Frequent Cities Code
const frequentCities = ['Delhi', 'Kolkata', 'Mumbai', 'Hyderabad']
const frequentCityTable = document.querySelector('#frequent-city-table')

function getFrequentCityData() {
  frequentCities.forEach(async (cityName) => {
    let results = await fetchdata(cityName);
    updateTable(cityName, results)

  })
}

function updateTable(cityName, results) {
  // This function creates a new row in the table and add's a new row
  console.log(frequentCityTable);
  let row = frequentCityTable.insertRow(1);
  row.innerHTML = `<th>${cityName}</th>
  <td>${results["temp"]}°C</td>
  <td>${results["feels_like"]}</td>
  <td>${results["humidity"]}</td>
  <td>${results["min_temp"]}</td>
  <td>${results["max_temp"]}</td>
  <td>${results["wind_speed"]}</td>
  <td>${results["wind_degrees"]}°</td>
  `;

}
async function fetchdata (city = 'Delhi'){
    // modular function to get the JSON data from the API
    const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
    const result = await response.json();
    
    
    return result
}


function displaySearchData(result) {
  // this function updates the card's details
  document.querySelector('#temp').textContent = result['temp']
  document.querySelector('#temp2').textContent = result['temp'];
  document.querySelector('#feels_like').textContent = result['feels_like']
  document.querySelector('#humidity').textContent = result['humidity']
  document.querySelector('#min_temp').textContent = result['min_temp']
  document.querySelector('#max_temp').textContent = result['max_temp']
  document.querySelector('#wind_speed').textContent = result['wind_speed']
  document.querySelector('#wind_degrees').textContent = result['wind_degrees']
  document.querySelector('#wind_speed2').textContent = result['wind_speed'];
}

getFrequentCityData();