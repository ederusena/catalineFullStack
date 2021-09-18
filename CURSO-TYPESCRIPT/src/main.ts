// BASE ARQUIVO CURSO CATALINE
interface User {
  name?: string;
  email: string;
  age: number;
  address?: {
    street: string;
    number: number;
  };
}

function showStreet(user: User) {
  return user.address?.street;
  // return user.address ? user.address.street : "não existe";
}

const response = showStreet({ name: "Eder", email: "eder.sena@live.com", age: 34, address: { street: "", number: 10 } })

console.log(response);