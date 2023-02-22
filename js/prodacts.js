fetch("./prodotti.json")
  .then(response => response.json()) // the .json() method parses the JSON response into a JS object literal
  .then(annunci =>{
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
// categorie nel dropdown
let params = new URLSearchParams(location.search)
let category = params.get('category')
let prodacts = []
if (category == "all") {
 prodacts = annunci 
} else {
   prodacts = annunci.filter((prodacts)=>{
return prodacts.category == category
})
}
// Cards iniettate in html
const tuttiAnnunci = prodacts.reverse()
const cardsWrapper = document.querySelector("#cardsWrapper")
tuttiAnnunci.forEach((el)=>{
  let div = document.createElement("div")
  div.classList.add("col-12","col-lg-4","my-3","me-5","mx-lg-auto", "justify-content-center","d-flex")
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
cardsWrapper.appendChild(div)
})
// dropdown
const categorieWrapper = document.querySelector("#categorieWrapper")
categorie.forEach((item) => {
  let li = document.createElement("li")
  li.innerHTML = `<a class="dropdown-item" href="./prodacts.html?category=${item}">${item}</a>`
  categorieWrapper.appendChild(li)
});
















































})
