// show the user's city
type UF = 'PE' | 'SP' | 'RJ'

interface User { 
    name: string, 
    address: { 
      city: string,
      UF: UF
    }
    sayHello: () => void
} // interface

function showCity(user: User) {
  user.address.UF = 'PE'
  user.sayHello = () => console.log('Hello')
  return user.address.city
}
showCity({ name: 'John', address: { city: 'London', UF: 'RJ' }, sayHello: () => console.log('Hello') }) 