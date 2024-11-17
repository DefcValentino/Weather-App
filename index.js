
const apiKey = "080fb88b5d214cdd8ab141448241511"
const apiUrl = "https://api.weatherapi.com/v1/current.json";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    try{
        const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}`);
    
        var data = await response.json();
    
        console.log(data)
    
        /// Update weather details
        document.querySelector(".cityname").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = data.current.temp_c +"°C";
        document.querySelector(".humidity").innerHTML = data.current.humidity+ "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";


        /// Update weather icon based on condition
        const condition = data.current.condition.text.toLowerCase();

        if(condition.includes("cloud")){
            weatherIcon.src = "images/clouds.png";
        }
        else if(condition.includes("clear")) {
             weatherIcon.src = "images/clear sun.png";
        } 
        else if(condition.includes("rain")) {
            weatherIcon.src = "images/rain.png";
       }
       else if(condition.includes("drizzle")) {
        weatherIcon.src = "images/dazzle.png";
       }
       else if(condition.includes("mist")) {
        weatherIcon.src = "images/mist.png";
       }


        document.querySelector(".weather").style.display = "block";

    } catch(error) {
        console.error(error);
        alert("unable to fetch weather data. Please chech the city name or API KEY")
    }
   
}

searchBtn.addEventListener('click', ()=> {
   const city = searchBox.value.trim();
   if(!city) {
     alert("Please enter a city name.")
     return;
   }

   checkWeather(city);
})

