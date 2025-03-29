//https://api.openweathermap.org/data/2.5/weather?lat=41.2867&lon=36.33&appid=bba9b10261117caa11eaf8d4e31e3d81&units=metric

const samsun = "lat=41.2867&lon=36.33";
const izmir = "lat=38.4237&lon=27.1428";
const ankara = "lat=39.9334&lon=32.8597";
const konya = "lat=37.8662&lon=32.4847";
const istanbul = "lat=41.00822&lon=28.9784";

const sehir = document.querySelector("h1");
const dereceYazisi = document.querySelector("#derece");
const butonlar = document.querySelector(".buttons-wrapper");
const havaDurumu = document.querySelector("#havaDurumu");

fetch(`https://api.openweathermap.org/data/2.5/weather?${konya}&appid=bba9b10261117caa11eaf8d4e31e3d81&units=metric`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        dereceYazisi.textContent = `${data.main.temp}°C`;
        sehir.textContent = `${data.name}/Türkiye`;
        const resim = document.querySelector(".havaimg");
        const icon = data.weather[0].icon;
        resim.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`)
        havaDurumu.textContent = data.weather[0].description;

    })

butonlar.addEventListener("click", sehirBelirleme)

function sehirBelirleme(e) {
    const secilenSehir = e.target.textContent;
    console.log(secilenSehir);
    if (secilenSehir === "Samsun") {
        sehir.textContent = secilenSehir + "/Türkiye";
        const url = `https://api.openweathermap.org/data/2.5/weather?${samsun}&appid=bba9b10261117caa11eaf8d4e31e3d81&units=metric`;
        fetchGonder(url);
    }
    if (secilenSehir === "İzmir") {
        sehir.textContent = secilenSehir + "/Türkiye";
        const url = `https://api.openweathermap.org/data/2.5/weather?${izmir}&appid=bba9b10261117caa11eaf8d4e31e3d81&units=metric`;
        fetchGonder(url);
    }
    if (secilenSehir === "Ankara") {
        sehir.textContent = secilenSehir + "/Türkiye";
        const url = `https://api.openweathermap.org/data/2.5/weather?${ankara}&appid=bba9b10261117caa11eaf8d4e31e3d81&units=metric`;
        fetchGonder(url);
    }
    if (secilenSehir === "Konya") {
        sehir.textContent = secilenSehir + "/Türkiye";
        const url = `https://api.openweathermap.org/data/2.5/weather?${konya}&appid=bba9b10261117caa11eaf8d4e31e3d81&units=metric`;
        fetchGonder(url);
    }
    if (secilenSehir === "İstanbul") {
        sehir.textContent = secilenSehir + "/Türkiye";
        const url = `https://api.openweathermap.org/data/2.5/weather?${istanbul}&appid=bba9b10261117caa11eaf8d4e31e3d81&units=metric`;
        fetchGonder(url);
    }

}

function fetchGonder(sehir) {
    fetch(sehir)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dereceYazisi.textContent = `${data.main.temp}°C`;
            sehir.textContent = `${data.name}/Türkiye`;
            const resim = document.querySelector(".havaimg");
            const icon = data.weather[0].icon;
            resim.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`)
            havaDurumu.textContent = data.weather[0].description;

        })
}


