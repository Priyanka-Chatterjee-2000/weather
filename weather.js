window.addEventListener("load",()=>{
let long;
let lat;
let temperatureDegree=document.querySelector('.temperature-degree');
let temperaturefarenheith=document.querySelector('.temperature-farenheith');
let temperatureDescription=document.querySelector('.temperature-description');
let locationTimezone=document.querySelector('.location-timezone');
var temperatureIcon=document.querySelector('.temp_icon');
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
    long=position.coords.longitude;
    lat=position.coords.latitude;
    const api=`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=17194b150459e16326cfe9c52024cab4`;    
fetch(api).then(response =>{
return response.json();
     }).then(data=>{
console.log(data);
let temp=data.main.temp-273;
const description=data.weather[0].description;
temperatureDegree.textContent=temp.toFixed(2);
tempf=(temp*9)/5+32;
temperaturefarenheith.textContent=tempf.toFixed(2);
temperatureDescription.textContent=description;
locationTimezone.textContent=data.name;
temperatureIcon.src=data.weather[0].icon+'.png';
if(data.weather[0].icon.endsWith("n"))
     {
         document.querySelector('.day').classList.remove('active');
         document.querySelector('.night').classList.add('active');
     
     }
     else{
        document.querySelector('.day').classList.add('active');
         document.querySelector('.night').classList.remove('active'); 
     }
     });
    
});
    }
    if('serviceWorker' in navigator)
    {
        navigator.serviceWorker.register('./sw.js')
        .then(function(){
console.log('Service Worker registered');
        });
    }
});
/* load service worker
"serviceWorker"in navigator && window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("./sw.js").then(e=>console.log("Success: ", e.scope)).catch(e=>console.log("Failure: ", e))
  }
  )*/
