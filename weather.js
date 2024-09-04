var inputvalue=document.querySelector('#city')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descript=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="e0aef278f4b0688dbd60c0ebfa687e0e"
function conversion(val){
    return (val-273).toFixed(3)
}

btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval=data['name']
        var descript=data['weather']['0']['description']
        var temperature=data['main']['temp']
        var windspeed=data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${conversion(temperature)}C</span>`
        description.innerHTML=`Sky Conditions: <span>${descript}<span>`
        wind.innerHTML=`Wind Speed: <span>${windspeed}km/h<span>`
    }
    )
.catch(err => alert('You entered Wrong city name'))
})