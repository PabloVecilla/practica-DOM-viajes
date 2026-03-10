// BANNER
const bannerArray = ["./banner/1.jpg", "./banner/2.jpg", "./banner/3.jpg", "./banner/4.jpg", "./banner/5.jpg", "./banner/6.jpg", "./banner/7.jpg", "./banner/8.jpg"]; 

const banner = document.querySelector("section.banner img"); 
banner.addEventListener("click", () => {
    const currentBanner = banner.getAttribute("src"); 
    const index = bannerArray.indexOf(currentBanner); 
    if (bannerArray.indexOf(currentBanner) !== 7)
        banner.src = bannerArray[index+1]; 
    else banner.src = bannerArray[0]; 

})
console.log(banner.src); 


// RECOMENDADOS
let lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias impedit dolorum expedita soluta rem non autem, voluptatem, aliquid enim reiciendis vel aspernatur?"; 
const recomendados = [
    {
      title: "Example Title",
      description: lorem,
      url_img: "./img/viajes-1.jpg"
    },
    {
      title: "Example Title",
      description: lorem,
      url_img: "./img/viajes-2.jpg"
    },
    {
      title: "Example Title",
      description: lorem,
      url_img: "./img/viajes-3.jpg"
    },
/*     {
        title: "Example Title",
        description: lorem,
        url_img: "./img/viajes-4.jpg"
    },
    {
    title: "Example Title",
    description: lorem,
    url_img: "./img/viajes-5.jpg"
    },
    {
    title: "Example Title",
    description: lorem,
    url_img: "./img/viajes-6.jpg"
    },
    {
    title: "Example Title",
    description: lorem,
    url_img: "./img/viajes-7.jpg"
    } */
];

let container = document.querySelector(".recommend div"); 
for (let recomendado of recomendados) {
    const card = document.createElement("article"); 
    card.innerHTML =`
        <header>
            <img src=${recomendado.url_img} alt="${recomendado.title}">
        </header>
        <main>
            <h3>${recomendado.title}</h3>
            <p>${recomendado.description}</p>
        </main>`
    
    container.appendChild(card); 
    console.log(recomendado); 
}
// fin recomendados

// DESTINOS 
const cities = [
    "Madrid",
    "Barcelona",
    "Valencia",
    "Seville",
    "Bilbao",
    "Granada",
    "Malaga",
    "Palma de Mallorca",
    "Alicante",
    "Zaragoza"
];

const select = document.querySelector("select"); 
let innerHtml = ""; 
for (let city of cities) {
    innerHtml += `
    <option value="${city.toLowerCase()}">${city}</option>`; 
}

console.log(innerHtml); 
select.innerHTML = innerHtml; 
// fin destinos


  
  