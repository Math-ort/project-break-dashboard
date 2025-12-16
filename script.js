
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let seg = document.getElementById("seg");

function actualizarReloj() { 
    let currentTime = new Date();
    hrs.textContent = currentTime.getHours().toString().padStart(2, "0");
    min.textContent = currentTime.getMinutes().toString().padStart(2, "0");
    seg.textContent = currentTime.getSeconds().toString().padStart(2, "0");
}

actualizarReloj();
setInterval(actualizarReloj, 1000);



let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");

function actualizarFecha() {
    let now = new Date();
    day.textContent = now.getDate().toString().padStart(2, "0");
    month.textContent = (now.getMonth() + 1).toString().padStart(2, "0");
    year.textContent = now.getFullYear();
    
  
}

actualizarFecha();
setInterval(actualizarFecha, 60 * 1000);
console.log(year, month, day);

const lengthInput = document.getElementById("pass")
const generatePassBtn = document.getElementById("generatePass")
const passwordBox = document.getElementById("passwordBox");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowerCase = "abcdefghijklmnopqrstuvwxyz",
        numbers = "0123456789",
        symbols = "!@#$%^&*()-_=+";

function generatePass(){
            const length = parseInt(lengthInput.value);
            let pass = "";
            const chars = upperCase + lowerCase + numbers + symbols;
        
            for (let i = 0; i < length; i++) {
                pass += chars[Math.floor(Math.random() * chars.length)];
             }
        
            passwordBox.textContent = pass;
        }
        
       

generatePassBtn.addEventListener("click", generatePass);

const apiUrl = "https://api.weatherapi.com/v1/current.json?key=33a8f2be12764ed6ae1192310250712&q=barcelona&aqi=no"

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const weather = await response.json();
        const loc = weather.location || {};
        const cur = weather.current || {};
        
        const ciudad = weather.location.name;
        const pais = weather.location.country;
        const temperatura = weather.current.temp_c;
        const humedad = weather.current.humidity;
        const viento = weather.current.wind_kph;
        const icono = weather.current.condition.icon;
        const texto = weather.current.condition.text;
        const precipitaciones = weather.current.precip_mm;

        
        document.getElementById("ciudad").textContent = `${ciudad} - ${pais}`;
        document.getElementById("temperatura").textContent = `${temperatura} °C`;
        document.getElementById("estado").textContent = texto;
        document.getElementById("datos").textContent = `Humedad: ${humedad}% | Viento: ${viento} km/h`;
        document.getElementById("icono").src = "https:" + icono;
        document.getElementById("precipitaciones").textContent = `precipitaciones: ${precipitaciones} mm`;
        

    console.log(weather);
    }  catch(error) {
        console.log(error.message)
    }
   
}




window.addEventListener('load', getWeather);


const addLinkBtn = document.getElementById("addLink");
const tituloInput = document.getElementById("tituloUsuario");
const urlInput = document.getElementById("urlUsuario");
const linksContainer = document.getElementById("linksContainer");

let links = JSON.parse(localStorage.getItem("links")) || [];
links.forEach(link => pintarLink(link));

addLinkBtn.addEventListener("click", () =>{
    const titulo = tituloInput.value.trim();
    const url = urlInput.value.trim();

    if (!titulo || !url) return;
    const link = {titulo, url};
    links.push(link);
    localStorage.setItem("links", JSON.stringify(links));
    pintarLink(link);

    tituloInput.value = "";
    urlInput.value = "";
})
function pintarLink( link ) {
    const div = document.createElement("div");
    div.classList.add("link-item");

    div.innerHTML = `
        <a href="${link.url}"target="_blank">${link.titulo}</a>
        <button class="delete">X</button>
    `;

    div.querySelector(".delete").addEventListener("click", () => {
        links = links.filter(l => l !== link);
        localStorage.setItem("links", JSON.stringify(links));
        div.remove();
    });

    linksContainer.appendChild(div);
}
const img = [
    "https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614597396930-cd6760b99f7c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1609442337980-df3c00302435?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1610377550697-807a629c2d81?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   
    "https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=3179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1668792545812-29a98114d555?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1738189669835-1a7fa8c958b4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1561355167-4eac6650cbeb?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697730126896-806bbc54f89a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1561355167-4eac6650cbeb?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function cambiarFondo() {
    const randomIndex = Math.floor(Math.random() * img.length);
    document.body.style.backgroundImage = `url('${img[randomIndex]}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  cambiarFondo(),
  setInterval(cambiarFondo, 15000);

  function openApp(appId) {
    // Ocultar el dashboard
    document.getElementById("dashboard").classList.add("hidden");
  
    // Mostrar solo la app seleccionada
    document.querySelectorAll(".app").forEach(app => {
      app.classList.add("hidden");
    });
    document.getElementById(appId).classList.remove("hidden");
  }
  
  function goHome() {
    // Ocultar todas las apps individuales
    document.querySelectorAll(".app").forEach(app => {
      app.classList.add("hidden");
    });
    // Mostrar dashboard completo
    document.getElementById("dashboard").classList.remove("hidden");
  }
  
  