// BASE ARQUIVO CURSO CATALINE
interface User {
  readonly name: string;
  age: number;
}

let user: User = {
  name: "John",
  age: 30
};

user.age = 40;
user.name = "Pete";