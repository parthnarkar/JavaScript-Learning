const userInput = document.getElementById('user-input');
const searchButton = document.getElementById('search');

const cityName = document.getElementById('city-name');
const cityRegion = document.getElementById('city-region');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getInfo(userCity){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=0a69eea8c57d4556aa1113455251602&q=${userCity}&aqi=yes`);

    return await promise.json();
}

searchButton.addEventListener('click' , async () => {
    const city = userInput.value;
    const cityData = await getInfo(city);
    cityName.innerHTML = `${cityData.location.name}`;
    cityRegion.innerHTML = `${cityData.location.region}`;
    cityTime.innerHTML = `${cityData.location.localtime}`;
    cityTemp.innerHTML = `${cityData.current.temp_c}`
})
