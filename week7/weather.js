
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch ('https:/api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1464fb6e7584bc3cdb54a2161ab117d6')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var name = document.querySelector('.name');
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

    .catch(err => alert('wrong city name'))   
})