displayWeather(){

const Element = document.querySelector(".className");

const notificationElement = document.querySelector(".notification");

 iconElement.innerHTML = 
 
 `<img src="icons/${weather.iconId}.png"/>`;

 tempElement.HTML = 
 `${weather.temperature.value} ° <span>F</span>`;

 tempElement.addEventListener("click", function(){

 if(wetaher.temperature.unit === "celsius"){
   let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    
   fahrenheit = math.floor(fahrenheit);

   templelement.innerHTML = `${fahrenheit}° <span>F</span>`;

   weather.temperature.unit = "fahrenheit";

 }else{

  tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;

  weather.temperature.unit = "celsius";

 }

 descElement.innerHTML = Clear Sky
 weather.description;

const locationElement.innerHTML = Dallas, TX
`${weather.city}, ${weather.country}`;

}