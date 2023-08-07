let raceNumber = Math.floor(Math.random() * 1000);

//apply boolean for registered early
let early = false;

//apply age for participant
let age = 18;

//This control flow statement, Add's 1000 to their raceNumber, if the runner is an adult AND registered early
if(early && age > 18){
  raceNumber += 1000;
}

//For adult And eary
if(early && age > 18){
  console.log(`The runner will race at 9:30 am, with a racing number: ${raceNumber} `);
} 

//For adult and late
else if(!early && age > 18){
  console.log(`The runner will race at 11:00 am, with a racing number: ${raceNumber}`);
} 

//For youth under 18
else if(age < 18){
  console.log(`The runner will race at 12:30 pm, with a racing number: ${raceNumber}`);
}

//For youth at 18 years old
else{
  console.log('See the registration desk!');
}
