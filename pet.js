const nomePet = document.getElementById('pet-name')
const ownerPet = document.getElementById('owner-name')
const speciesPet = document.getElementById('pet-species')
const breedPet = document.getElementById('pet-breed')

const petList = []

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  padrone(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true
    } else {
      return false
    }
  }
}

const renderPet = function () {
  const datiPet = document.querySelector('ul')
  datiPet.innerHTML = '' //per sicurezza la svuoto prima di riempirla
  petList.forEach((list) => {
    const newLi = document.createElement('li')
    newLi.innerHTML = `${list.petName} di ${list.ownerName} è un ${list.species} di razza ${list.breed}`
    datiPet.appendChild(newLi)
  })
}

const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  const newListPet = new Pet(
    nomePet.value,
    ownerPet.value,
    speciesPet.value,
    breedPet.value
  )

  console.log('Lista creata', newListPet)
  petList.push(newListPet)
  nomePet.value = '' //svuota l'input field alla fine
  ownerPet.value = ''
  speciesPet.value = ''
  breedPet.value = ''
  renderPet()
})
