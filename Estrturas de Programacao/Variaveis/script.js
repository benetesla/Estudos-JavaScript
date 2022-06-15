//soma de um retangulo e um circulo
let retangulo = { area: function(base, altura) { return base * altura; } };
let circulo = { area: function(raio) { return Math.PI * Math.pow(raio, 2); } };
console.log(retangulo.area(5, 8));
console.log(circulo.area(5));
//usuario
let nome = "João";
let idade = 20;
let usuario = { nome, idade };
console.log(usuario);
//validar se o usuario é maior de idade
let nome2 = "João";
let idade2 = 20;
let usuario2 = { nome2, idade2 };
if (usuario2.idade2 >= 18) {
    console.log(`${usuario.nome} é maior de idade`);
} else { console.log(`${usuario.nome} é menor de idade`); }
let name = "João";
const nickname = "soares";
const age = 20;
let user = { name, age, nickname };
console.log(user);
//receber dados do prompt
let nome3 = prompt("Digite seu nome");
let idade3 = prompt("Digite sua idade");
let usuario3 = { nome3, idade3 };
document.write(`${usuario3.nome3} tem ${usuario3.idade3} anos`);
//transformar um numero em string
let numero = 10;
let numeroString = numero.toString();
console.log(numeroString);
//para o processamento de dados