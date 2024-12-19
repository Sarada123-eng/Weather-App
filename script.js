const BASE_URL="https://api.weatherapi.com/v1/current.json?key=805f405f94d8430888c124638241812&q=";

let search=document.querySelector(".search-bar i");

const updateCondition = (data)=>{
    let temp = document.querySelector("#temp");
    temp.innerText = `${data.current["temp_c"]}° C`;

    let type = document.querySelector("#type");
    type.innerText = data.current.condition["text"];

    let location = document.querySelector(".location p");
    location.innerText = `${data.location["name"]}, ${data.location["region"]}`;
    let country = document.querySelector("#country");
    country.innerText = data.location["country"];

    let feelsTemp = document.querySelector("#feel-cond");
    let hum = document.querySelector("#humd-per");
    feelsTemp.innerText = `${data.current.feelslike_c}° C`;
    hum.innerText = `${data.current.humidity}%`;
}

const updateWeather = async (cityName)=>{
    const URL = `${BASE_URL}${cityName}&api=no` ;

    let response = await fetch(URL);
    let data = await response.json();

    let img = document.querySelector(".condition img");
    let newSrc = data.current.condition["icon"];
    img.src = newSrc;

   updateCondition(data);
}

search.addEventListener("click",()=>{
   let city = document.querySelector(".search-bar input");
   let cityName = city.value; 
   
   updateWeather(cityName);
});