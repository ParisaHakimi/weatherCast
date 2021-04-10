var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var main = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var iconElement = document.querySelector('.weather-icon');
// var dayTime = new Date(document.querySelector('#dayTime'));


button.addEventListener('click', function(e) {
    e.preventDefault();
    fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' +
            inputValue.value +
            '&appid=de121869a243d8ce81d6eb43d8a7f719'
        )
        .then((response) => response.json())
        .then((data) => {

            var tempValue = Math.floor((data.main.temp - 273) * 9 / 5 + 32);
            var nameValue = data.name;
            var descValue = data.weather[0].description;
            // var iconId = data.weather[0].icon;


            // iconElement.innerHTML = '< img src = "images/${weather.iconId}.png" >';
            main.innerHTML = nameValue;
            desc.innerHTML = descValue;
            temp.innerHTML = tempValue + '°F';
            inputValue.value = '';
        })

    .catch((err) => {
        console.log(err);
    });
});