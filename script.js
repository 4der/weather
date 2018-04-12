fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=d0583ed95147e87c4f65eb09fac0912a").then((response) => {
console.log(response.json())
})


fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=d0583ed95147e87c4f65eb09fac0912a").then((response) => {
 return response.json()
}).then((json) => {

  const name = json.name;
  document.getElementById("city").innerHTML = name;

  const temp = json.main.temp;
  document.getElementById("temp").innerHTML = temp.toFixed(1) +" &#176";

  const weather = json.weather[0].description;
  document.getElementById("description").innerHTML = weather;

  const clouds = json.clouds.all;
  document.getElementById("clouds").innerHTML = clouds;

 console.log(json)
})
