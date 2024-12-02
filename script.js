let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key= "ceca17937376501209adb5bbdfc2e50a"
let difKelvin = 273.15

document.getElementById('ciudadEntrada').addEventListener('keydown', (event)=> {
    if (event.key ==='Enter') {
        const ciudad = document.getElementById('ciudadEntrada').value
        if (ciudad){
            fetchDatosClima(ciudad);

        }else {
            alert('Por favor, ingresa el nombre de una ciudad.')
        }
    }
})


function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}&lang=es`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=' '

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}ºC`
    
    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`
    const iconoInfo = document.createElement('img')
    
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
        
}
