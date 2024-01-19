// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOneOfSum = 2;
let numberTwoOfSum = 2;
let sum = numberOneOfSum + numberTwoOfSum;

alert(sum);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
//Para saber o tipo de dado você pode usar o operador `typeof`

const numberVerify = 8;

if (typeof numberVerify === "number") {
  alert("É um número");
} else {
  alert("Não é um número");
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const stringVerify = "Hello World";

if (typeof stringVerify === "string") {
  alert("É uma string");
} else {
  alert("Não é uma string");
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const boolVerify = false;

if (typeof boolVerify === "boolean") {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let numberOneOfSubtraction = 2;
let numberTwoOfSubtraction = 2;
let resultOfSubtraction = numberOneOfSum - numberTwoOfSum;

alert(`O resultado da subtração é: ${resultOfSubtraction}`);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let numberOneOfMultiplication = 2;
let numberTwoOfMultiplication = 2;
let resultOfMultiplication = numberOneOfSum * numberTwoOfSum;

alert(`O resultado da multiplicação é: ${resultOfMultiplication}`);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let numberOneOfDivision = 2;
let numberTwoOfDivision = 2;
let resultOfDivision = numberOneOfSum / numberTwoOfSum;

alert(`O resultado da divisão é: ${resultOfDivision}`);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const evenNumber = 8;
const checkIfIsIven = evenNumber % 2 === 0;

if (checkIfIsIven) {
  alert("O número é par");
} else {
  alert("O número é ímpar");
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const oddNumber = 5;
const checkIfIsOdd = oddNumber % 2 !== 0;

if (checkIfIsOdd) {
  alert("O número é ímpar");
} else {
  alert("O número é par");
}
