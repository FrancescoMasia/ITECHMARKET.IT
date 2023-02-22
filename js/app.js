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
const categorieWrapper = document.querySelector("#categorieWrapper")
categorie.forEach((item) => {
  let li = document.createElement("li")
  li.innerHTML = `<a class="dropdown-item" href="./prodacts.html?category=${item}">${item}</a>`
  categorieWrapper.appendChild(li)
});

// ultimi quattro prodotti
const caruselWrapper = document.querySelector("#slidesUCWrapper");
const ultimiOggetti = annunci.slice(-4)
ultimiOggetti.forEach((el)=>{
  let div = document.createElement("div")
  div.classList.add("col-12","col-lg-3","my-3","mx-auto","mx-lg-auto", "justify-content-center","d-flex")
  div.innerHTML = `<div class="card border-0 card-category p-3 box-color" style="width: 18rem;">
  <img src="${el.img_url[0]}" alt="" class="card-img-top">
  <div class="card-body">            
    <h5 class="card-title fs-main bg-mix fs-3">${el.name_product}</h5>            
    <div class="mt-3">
      <div class="d-flex justify-content-between">
        <p class="card-text text-white mb-0 fs-main">Categoria:</p><span class="bg-mix fst-italic">${el.category}</span>
      </div>
      <div class="d-flex justify-content-between">
        <p class="card-text text-white mb-0 fs-main">Stato:</p><span class="bg-mix fst-italic">${el.usage == false ? "nuovo" : "usato"}</span>
      </div>              
      <div class="d-flex justify-content-between">
        <p class="card-text text-white mb-0 fs-main">Prezzo:</p><span class="bg-mix fst-italic">${el.price}</span>
      </div>  
       <div class="d-flex justify-content-between">
         <p class="card-text text-white mb-0 fs-main">Pubblicato:</p><span class="bg-mix fst-italic">${el.pubblished}</span>
       </div>              
    </div>
    <div class="d-flex mt-4">              
      <button class="btn btn-category d-block ms-auto">
        <i class="bi bi-chevron-right text-white"></i>
      </button>
    </div>            
  </div>
</div>`
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


})
