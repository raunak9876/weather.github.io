
const apikey = "3d8e04438c5dfbaa3d30581fa83a667c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather_icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

         const data = await response.json();
         console.log(data);
         document.querySelector(".city").innerHTML = data.name;
         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
         document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
         document.querySelector(".feels-like").innerHTML = Math.round(data.main.feels_like) + "°C";
                    
        if(data.weather[0].main == "cloud"){
            weathericon.src = "images/clouds.png"
         }
        else if(data.weather[0].main == "Drizzle"){
         weathericon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
          weathericon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Mist"){
          weathericon.src = "images/mist.png"
        }
        else{
            weathericon.src = "images/clear.png"
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
       
}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent form submission
        checkweather(searchBox.value);
    }
});

