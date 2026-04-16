// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="
const input = document.getElementById("state-input")
/* Your code here!*/
function fetchWeatherAlerts (state) {
  fetch(`${weatherApi}${state}`)
    .then(response => response.json())
    .then(data => {
        displayAlerts(data)
        input.value = ""

        const errorDiv = document.getElementById("error-message")
        errorDiv.classList.add("hidden")
    })
     
    .catch(error => {
        const errorDiv = document.getElementById("error-message")
        errorDiv.classList.remove("hidden")
        errorDiv.textContent = error.message
    })
}


function  displayAlerts(data){
    const fetchAlerts = document.getElementById("alerts-display")
    fetchAlerts.innerHTML = ""
    const summary = document.createElement("p")
    summary.textContent = `Weather Alerts: ${data.features.length}`
    fetchAlerts.append(summary)

    const list = document.createElement("ul")
    
    data.features.forEach(alert => {
        const listItem = document.createElement("li")
        listItem.textContent = alert.properties.headline;
        list.append(listItem);
     });
    
fetchAlerts.append(list)
    } 
    
document.getElementById("fetch-alerts").addEventListener("click", ()=>{

const state = input.value    
fetchWeatherAlerts(state)})