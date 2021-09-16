// Variaveis
let message: string = 'Hello World'
let total: number = 0
let isOpen: boolean = false


console.log(message.toUpperCase(), total, isOpen)

// any -  uma variavel que pode receber qualquer tipo de valor
let teste: any = 'teste'

// void - não retorna nada
function showInformation(information: string = 'Retorna apenas um texto'): void {
    console.log(information)
}

// never - nunca retorna nada
function error(): never {
  throw new Error('Error')
}