/* eslint-disable no-console */
'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water/this.flour)*100;
  }
};
console.log (loaf.flour, loaf.water);
console.log(loaf.hydration());
//`````````````````````````````````````````````````

const myObj = {
  foo: 'you are',
  bar: 'none',
  fum: 7,
  quux: 8,
  spam: 'me'
};

for(var property in myObj){
  console.log(property, ':', myObj[property]);
}
//````````````````````````````````````````````````````````
const myObj2 = {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(myObj2.meals[3]);
//`````````````````````````````````````````````````````````````````````

const myObj4 = {
  name: 'Dwight',
  jobTitle: 'assistant to the regional manager',
  boss: 'Jim',
};

const myObj5 = {
  name: 'Jim',
  jobTitle: 'Regional manager',
  boss: 'Michael',
};

const myObj6 = {
  name: 'Michael',
  jobTitle: 'Senior regional manager',
};

const myArray =[myObj4, myObj5, myObj6];

for(let i = 0; i < myArray.length; i++){
  console.log(myArray[i].name, ':', myArray[i].jobTitle);
}
//``````````````````````````````````````````````````````````````````

for(let x in myArray){
  if(myArray[x].hasOwnProperty('boss')){
    console.log(`${myArray[x].jobTitle} ${myArray[x].name} reports to ${myArray[x].boss}`);
  }
  else{
    console.log(`${myArray[x].jobTitle} ${myArray[x].name} doesn't report to anybody.`);
  }  
}

// let sentence = 'craft block argon meter bells brown croon droop';
// const myArray =  sentence.split(' ');
// //console.log('hello ' + myArray[1]);

// function decode(encodedWord) {
//   const cipher ={
//     a: 2,
//     b: 3,
//     c: 4,
//     d: 5,  
//   };
//   if(encodedWord[0] in cipher){
//     //console.log(encodedWord[0]);
//     //console.log(encodedWord[cipher[encodedWord[0]]-1]);
//     return encodedWord[cipher[encodedWord[0]]-1];
//   }
//   else{
//     //console.log( 'empty string');
//     return ' ';
//   }    
// }

// function decodeWord(message){
//   const myArray =  message.split(' ');
//   let myString = '';
//   for(let i = 0; i < myArray.length; i++){
//     myString +=decode(myArray[i]);
//   }
//   return myString;
// }
// console.log( decodeWord(sentence));

function mammal(name, numEyes) {
  return {
    name: name,
    isWarmblooded: true,
    numEyes: numEyes,
    evolve: function() {
      console.log("I'm not mutating, I'm evolving.");
      this.numEyes++;
    },
    explainYourSelf: function() {
      console.log(
        `I'm just a ${this.name} with ${this
          .numEyes}  eye(s). Nothing to see here.`
      );
    },
  };
}

function LOTRisforNERDS(nerdName, race, origin, attack, defense) {
  return {
    nerdName: nerdName,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function() {
      return `${nerdName} is a ${race} from ${origin}`;
    },
    evaluateFight(character) {
      let x = (character.defense>= this.attack) ? 0 : this.attack - character.defense;
      let y = (this.defense>= character.attack) ? 0 : character.attack - this.defense;
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  };
}

let characters = [
  ['Gandalf the White','Wizard', 'Middle Earth',10,6],
  ['Bilbo Baggins','Hobbit', 'The Shire',2 ,1],
  ['Frodo Baggins','Hobbit', 'The Shire',3 ,2],
  ['Aragorn son of Arathorn','Man', 'Dunnedain',6 ,8],
  ['Legolas','Elf', 'Woodland Realm',8 ,5],
  ['Arwen Undomiel','Half-Elf', 'Rivendell',15 ,15],
];

let newCharacters = [];

for(let attr in characters) {
  newCharacters.push(LOTRisforNERDS(characters[attr][0], characters[attr][1],
    characters[attr][2],characters[attr][3],characters[attr][4]));
}

function findAragorn() {
  return newCharacters.find(char => char.nerdName.toLowerCase().includes('aragorn')).describe();
}

findAragorn();

function onlyHobbits() {
  return newCharacters.filter(char => char.race.toLowerCase().includes('hobbit'));
}
onlyHobbits();

function fivePlusATK() {
  return newCharacters.filter(char => char.attack >= 5);
}
fivePlusATK();

