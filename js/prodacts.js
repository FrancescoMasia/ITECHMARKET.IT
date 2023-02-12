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


// Cards iniettate in html
const tuttiAnnunci = annunci.reverse()
const cardsWrapper = document.querySelector("#cardsWrapper")
tuttiAnnunci.forEach((elm)=>{
  let div = document.createElement("div")
  div.classList.add("col-4","my-1", "justify-content-center","d-flex")
  div.innerHTML = `<div class="card cardTot mix ${elm.category}" style="width: 18rem;">
  <img src="${elm.img_url[0]}" class="card-img-top" alt="...">
  <button id= "btnCuore" class = "text-end me-2 border-0 btn btn-transparent "><i id="cuoricino" class=" fs-3  bi bi-heart-fill"></i></button>
  <div class="card-body">
    <h5 class="card-title">${elm.name_product}</h5>
    <p>${elm.pubblished}</p>
    <a href="#" class="btn btn-primary">${elm.price}</a>
  </div>
</div>`
cardsWrapper.appendChild(div)
})
let btnCuore = document.querySelector("#btnCuore")
let cuoricino = document.querySelector("#cuoricino")
btnCuore.addEventListener('click',()=>{
  cuoricino.classList.toggle("cuoricinoRmv")
})

// Bottoni per tutte categorie
const btnC = document.querySelector("#btnC")
filtroCategorie(numCat(mapCat)).forEach((elm)=>{
  let span = document.createElement("span")
  span.innerHTML = `<span class="workitem " data-filter=".${elm}">${elm}</span>`
  btnC.appendChild(span)
})



// /----- Link Active Work -----/
const linkWork = document.querySelectorAll('.workitem')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))





// /---------- MIXITUP FILTER PORTFOLIO ----------/
let mixerPortfolio = mixitup('.containerTot', {
    selectors: {
        target: '.cardTot'
    },
    animation: {
        duration: 300
    }
});















































})
