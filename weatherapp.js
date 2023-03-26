function btn(data){
    const search = document.getElementById('search').value
    let city =document.getElementById('city')
    let temp = document.getElementById('temp')
    let image = document.getElementById('image')
    let pressure = document.getElementById('pressure')
    

    const key = '7e2b26d93123f09d078df7469c5ae5d5'
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7e2b26d93123f09d078df7469c5ae5d5&units=metric`

    // let options = {
    //     method: 'GET'
    // };
    fetch(endpoint )
    .then((res)=>res.json())
    .then(data => {

            console.log(data)
            city.innerHTML = data['name']
            temp.innerHTML = data['main']['temp']
            pressure.innerHTML = data['main']['pressure']
            image.src =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            image.style.width = '200px'
            image.style.height = '200px'
            
        })}