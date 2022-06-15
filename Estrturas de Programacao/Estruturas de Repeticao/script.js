let value1 = 10;
while (value1 < 80) {
    console.log(value1);
    value1++;
}
console.log("Fim do loop");
let z = 10;
while (z > 0) {
    console.log(z);
    z--;
}
console.log("Fim do loop");
let y = 14;
do {
    console.log(y);
    y--;
}
while (y > 0);
console.log("fim do while");
//for
for (let i = 0; i < 100; i++) {
    console.log("Im dead insede" + i);
}
console.log("fim do for");
//for in
let array = ["a", "b", "c", "d", "e"];
for (let i in array) {
    console.log(array[i]);
}
console.log("fim do for in");
//for of
for (let i of array) {
    console.log(i);
}
console.log("fim do for of");
//break
for (let i = 0; i < 100; i++) {
    if (i == 50) {
        break;
    }
    console.log(i);
}
console.log("fim do break");
//continue
let x = 0;
while (x < 10) {
    x = x + 1;
    if (x % 2 == 0) {
        continue;
    }
    console.log(x);
    x = x + 1;
}
console.log("fim do continue");
//incremento e decremento
let h = 15;
while (h > 25) {
    console.log(h);
    h += 10;
}
for (let i = 0; i < 100; i++) {
    console.log(i);
    i += 10;
}
console.log("fim do incremento e decremento");
//switch
let day = "domingo";
switch (day) {
    case "segunda":
        console.log("segunda");
        break;
    case "terca":
        console.log("terca");
        break;
    case "quarta":
        console.log("quarta");
        break;
    case "quinta":
        console.log("quinta");
        break;
    case "sexta":
        console.log("sexta");
        break;
    case "sabado":
        console.log("sabado");
        break;
    case "domingo":
        console.log("domingo");
        break;
    default:
        console.log("dia invalido");
        break;
}