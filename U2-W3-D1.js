class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  confrontaEta(x, y) {
    if (x.age > y.age) {
      console.log(`${x.firstName} è più vecchio di ${y.firstName}`)
    } else if (x.age < y.age) {
      console.log(`${x.firstName} è più giovane di ${y.firstName}`)
    } else {
      console.log(`${x.firstName} ha la stessa età di ${y.firstName}`)
    }
  }
}

const utente1 = new User('Filippo', 'Verdi', 25, 'Chieti')
const utente2 = new User('Giò', 'Crescenzo', 25, 'Pescara')

const confronto = utente1.confrontaEta(utente1, utente2)
console.log(confronto)
