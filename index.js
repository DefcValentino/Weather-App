
const apiKey = "850fbfeda625c9287e4ac42b553f5db7"
const apiUrl = "https://api.weatherstack.com/current?units=m";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&access_key=${apiKey}&query=${city}`);
    var data = await response.json();

    console.log(data)

    document.querySelector(".cityname").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temperature +"°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity+ "%";
    document.querySelector(".wind").innerHTML = data.current.wind_speed + "km/h";
}

searchBtn.addEventListener('click', ()=> {
   checkWeather(searchBox.value);
})