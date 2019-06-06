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

