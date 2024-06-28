let nums = [];

console.log(nums);

// Adicionando elementos no array
nums.push(4; //vamos adicionar o numero no array
nums.push(5);
nums.push(10);
nums.push(12);
console.log(nums);
nums.push(100)
console.log(nums);

// Removendo elementos do array
nums.pop();
console.log(nums);


// Inserir no inicio
let notas = [6.5, 7.9, 9.0];
console.log(notas);
notas.unshift(10.0);
console.log(notas);

// Remover do inicio
notas.shift();
console.log(notas);
notas.shift();
console.log(notas);

// Juntar o array e montar um string
let enderecoIP = [192, 168, 1, 1];
console.log(enderecoIP);

let data = ["27", "06", "2024"];
let dataString = data.join("/")
console.log(dataString);

// Concatenar arrays 
let p1 = ["Mouse", "Monitor", "Microfone"];
let p2 = ["Teclado", "Webcam", "Headset"];

let p3 = p1.concat(p2);
console.log(p3);

// Array reverso
let n = [1, 2, 3];
let nInvertido = n.reverse();
console.log(nInvertido);

//Includes 