/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let index = 0; index < pets.length; index++) {
  console.log(pets[index]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
//qui con l'elemento sort ho riorddinato tutti gli elementi dell'array
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
//qui ho usato l'elemento reverse per ordinarli invertiti
pets.sort().reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
// qui ho prima rimosso il primo elemento con il metodo shift e poi riaggiunto con il metodo push cosi da averlo all'ultima posizione
pets.shift();
console.log(pets);
pets.push("redfish");
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
//qui col ciclo for ho cilcato l'array cars così da aggiungere la proprietà licensePlate
for (let index = 0; index < cars.length; index++) {
  cars[index].licensePlate = 555;
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
// qui ho prima creato l'oggetto aggiungendolo col  metodo Push e poi ciclando l'array cars col for ho potuto rimuovere l'ultimo elemento della proprietà trims da ogni oggetto col pop
cars.push({
  brand: "Ferrari",
  model: 458,
  color: "black",
  trims: ["gt", "st"],
});
console.log(cars);
for (let index = 0; index < cars.length; index++) {
  cars[index].trims.pop();
}

console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
//qui ciclando col for l'array cars ho potuto  individuare e salvare il primo elemento della proprietà trims (Selezionadolo con 0 cioè il primo elemento) di ogni oggetto nel nuovo array
const justTrims = [];
for (let index = 0; index < cars.length; index++) {
  justTrims[index] = cars[index].trims[0];
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
// qui ciclando sempre l'array cars col for ho potuto vedere e dare due condizioni con l'if se la prima lettera della parola color fosse b,utilizzando il charAt (dopo 300 ricerche online,dato che con indexOF non andava)
for (let index = 0; index < cars.length; index++) {
  let auto = cars[index];
  if (auto.color.charAt(0) === "b") {
    console.log("Fizz");
  } else if (auto.color.charAt(0) !== "b") {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let index = 0;
while (numericArray[index] !== 32) {
  console.log(numericArray[index]);
  index++;
} ////qui ho dato un valore 0 all'index,cioè l'indice,così per poi confrontare la disuguaglianza, dell'array, con tutti i numeri che venivano prima del 32 e stamparli a schermo

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

// qui creando un array vuoto come richiesto,ho utilizzato un ciclo for prima di utilizzare lo switch,cosi per poi confrontare le lettere del dizionario con i numeri
// ed ho poi creato ogni caso(case) per ogni lettera per poi trovare a che numero corrispendessero le lettere contenute dall'array
const charactersArray = ["g", "n", "u", "z", "d"];
const position = [];

for (let i = 0; i < charactersArray.length; i++) {
  const lettera = charactersArray[i];

  switch (lettera) {
    case "a":
      position[i] = 1;
      break;
    case "b":
      position[i] = 2;
      break;
    case "c":
      position[i] = 3;
      break;
    case "d":
      position[i] = 4;
      break;
    case "e":
      position[i] = 5;
      break;
    case "f":
      position[i] = 6;
      break;
    case "g":
      position[i] = 7;
      break;
    case "h":
      position[i] = 8;
      break;
    case "i":
      position[i] = 9;
      break;
    case "j":
      position[i] = 10;
      break;
    case "k":
      position[i] = 11;
      break;
    case "l":
      position[i] = 12;
      break;
    case "m":
      position[i] = 13;
      break;
    case "n":
      position[i] = 14;
      break;
    case "o":
      position[i] = 15;
      break;
    case "p":
      position[i] = 16;
      break;
    case "q":
      position[i] = 17;
      break;
    case "r":
      position[i] = 18;
      break;
    case "s":
      position[i] = 19;
      break;
    case "t":
      position[i] = 20;
      break;
    case "u":
      position[i] = 21;
      break;
    case "v":
      position[i] = 22;
      break;
    case "w":
      position[i] = 23;
      break;
    case "x":
      position[i] = 24;
      break;
    case "y":
      position[i] = 25;
      break;
    case "z":
      position[i] = 26;
      break;
  }
}
console.log(position);