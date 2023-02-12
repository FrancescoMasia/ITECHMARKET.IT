fetch("./prodotti.json")
  .then(response => response.json()) // the .json() method parses the JSON response into a JS object literal
  .then(annunci =>{








    // media rating products
function mediaFinale_ratingProducts(array) {
  const mappa = array.map((x)=>{
    return x.rating_product 
   })
    const mf = mappa.reduce((tot,el)=>{
      return tot +=el/mappa.length
    },0)
  return mf
}
console.log(mediaFinale_ratingProducts(annunci))
const prodottiCaricatiWrapper = document.querySelector("#prodottiCaricatiWrapper")
const ultimoOggetto = annunci.slice(-1)
ultimoOggetto.forEach((el)=>{
  let p = document.createElement("p")
  p.classList.add("display-3")
  p.innerText = el.id;
  prodottiCaricatiWrapper.appendChild(p)
})


// rating products
const ratingProductsWrapper = document.querySelector("#ratingProductsWrapper")

  let p1 = document.createElement("p")
  p1.classList.add("display-3")
  p1.innerText = Math.round(mediaFinale_ratingProducts(annunci));
  ratingProductsWrapper.appendChild(p1)


  // rating sellers
  function mediaFinale_ratingSeller(array) {
    const mappa = array.map((x)=>{
      return x.rating_seller 
     })
      const mf = mappa.reduce((tot,el)=>{
        return tot +=el/mappa.length
      },0)
    return mf
  }
  const ratingSellerWrapper = document.querySelector("#ratingSellerWrapper")
  let p2 = document.createElement("p")
  p2.classList.add("display-3")
  p2.innerText = Math.round(mediaFinale_ratingSeller(annunci));
  ratingSellerWrapper.appendChild(p2)


  







// categorie
const mapCat = annunci.map((el)=>{
  return el.category
})
function numCat(array) {
  const classificaObj ={}
  for (let i = 0; i < array.length; i++) {
    if (classificaObj.hasOwnProperty(array[i])) {
      classificaObj[`${array[i]}`] +=1
    } else {
      classificaObj[`${array[i]}`] = 1
    }
  } 
  return Object.entries(classificaObj)
}
function filtroCategorie(array) {
  let arrayVuoto = []
  for (let i = 0; i < array.length; i++) {
    arrayVuoto.push(array[i][0])
  }
  return arrayVuoto
}
console.log(filtroCategorie(numCat(mapCat)))
const categorie = filtroCategorie(numCat(mapCat))
const slidesWrapper = document.querySelector("#slidesWrapper")
categorie.forEach((el) => {
  let div = document.createElement("div")
  div.classList.add("swiper-slide")
  div.innerText = el;
  slidesWrapper.appendChild(div)
});

// dropDown Categorie nella navbar
const categorieWrapper = document.querySelector("#categorieWrapper")
categorie.forEach((item) => {
  let li = document.createElement("li")
  li.innerHTML = `<a class="dropdown-item" href="#">${item}</a>`
  categorieWrapper.appendChild(li)
});







// ultimi cinque prodotti
const caruselWrapper = document.querySelector("#slidesUCWrapper");
const ultimiOggetti = annunci.slice(-5)
ultimiOggetti.forEach((el)=>{
  let div = document.createElement("div")
  div.classList.add("cardCinque")
  div.innerHTML = `<div class="card-details">
  <p class="text-title text-white">${el.name_product}</p>
  <p class=" text-white">${el.brend_product}</p>
</div>
<button class="card-button">More info</button>`
  caruselWrapper.appendChild(div)

})














// scroll prima sezione
const prodottiCaricati = document.querySelector("#prodottiCaricati");
document.addEventListener("scroll", () =>{
    let pxY = window.pageYOffset;
    if (pxY >320 ){
        prodottiCaricati.classList.remove("prodottiCaricatiRmv");
        prodottiCaricati.style.transform = "translateX(0px)";
        prodottiCaricati.style.transition = "0.5s";
    } else {
        prodottiCaricati.classList.add("prodottiCaricatiRmv");
        prodottiCaricati.style.transform = "translateX(-100px)";
        prodottiCaricati.style.transition = "0.5s";
    }
});





// sroll seconda sezione
const ratingProducts = document.querySelector("#ratingProducts");
document.addEventListener("scroll", () =>{
    let pxY = window.pageYOffset;
    if (pxY >620 ){
      ratingProducts.classList.remove("prodottiCaricatiRmv");
      ratingProducts.style.transform = "translateX(0px)";
      ratingProducts.style.transition = "0.5s";
    } else {
      ratingProducts.classList.add("prodottiCaricatiRmv");
      ratingProducts.style.transform = "translateX(100px)";
      ratingProducts.style.transition = "0.5s";
    }
});





// scroll terza sezione
const ratingSellers = document.querySelector("#ratingSellers");
document.addEventListener("scroll", () =>{
    let pxY = window.pageYOffset;
    if (pxY >920 ){
      ratingSellers.classList.remove("prodottiCaricatiRmv");
      ratingSellers.style.transform = "translateX(0px)";
      ratingSellers.style.transition = "0.5s";
    } else {
      ratingSellers.classList.add("prodottiCaricatiRmv");
      ratingSellers.style.transform = "translateX(-100px)";
      ratingSellers.style.transition = "0.5s";
    }
});



let swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});



































})
