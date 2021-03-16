'use strict';


alert('HELLO DEAR 😎');

let yourName = prompt('What is your name, for please?');

console.log(yourName);

yourName= yourName.toUpperCase();

alert('YOU ARE WELCOME '+ yourName+ ' 😃');
alert('Lets START 😃 !!');


let scoreAll = 0;

let qOne = prompt ('Did you hear about PharmD specialty ' + yourName + ' ?');
console.log(qOne);



if (qOne.toUpperCase() === 'YES'){
  qOne= 1;
} else if (qOne.toUpperCase() === 'NO') {
  qOne= 0;}

switch(qOne) {
case 1:
  alert('Thats awesome, ' + yourName + ' Your answer is correct 🤓');
  scoreAll= scoreAll+1;
  break;

case 0:
  alert('Your answer is wrong, ' + yourName + ' no problem the explanation will desply in the screen now 🙂');
  break;

default:
  alert('Try again, ' + yourName + ' Answer withe YES or NO !!');
}




let qTwo = prompt('Did you hear about JUST universety ' + yourName + ' ?');
console.log(qTwo);



if (qTwo.toUpperCase() === 'YES'){
  qTwo= 1;
} else if (qTwo.toUpperCase() === 'NO') {
  qTwo= 0;}

switch(qTwo) {
case 1:
  alert('Thats awesome, ' + yourName + ' Your answer is correct 🤓');
  scoreAll= scoreAll+1;
  break;

case 0:
  alert('Your answer is wrong, ' + yourName + ' no problem the explanation will desply in the screen now 🙂');
  break;

default:
  alert('Try again, ' + yourName + ' Answer withe YES or NO !!');
}



let qThree = prompt('Did you hear about IMC ' + yourName + ' ?');
console.log(qThree);


if (qThree.toUpperCase() === 'YES'){
  qThree= 1;
} else if (qThree.toUpperCase() === 'NO') {
  qThree= 0;}

switch(qThree) {
case 1:
  alert('Thats awesome, ' + yourName + ' Your answer is correct 🤓');
  scoreAll= scoreAll+1;
  break;

case 0:
  alert('Your answer is wrong, ' + yourName + ' no problem the explanation will desply in the screen now 🙂');
  break;

default:
  alert('Try again, ' + yourName + ' Answer withe YES or NO !!');
}



let qFour = prompt('Did you hear about PMP ' + yourName + ' ?');
console.log(qFour);


if (qFour.toUpperCase() === 'YES'){
  qFour= 1;
} else if (qFour.toUpperCase() === 'NO') {
  qFour= 0;}

switch(qFour) {
case 1:
  alert('Thats awesome, ' + yourName + ' Your answer is correct 🤓');
  scoreAll=scoreAll+1;
  break;

case 0:
  alert('Your answer is wrong, ' + yourName + ' no problem the explanation will desply in the screen now 🙂');
  break;

default:
  alert('Try again, ' + yourName + ' Answer withe YES or NO !!');
}



let qFive = prompt('Did you hear about ehealth ' + yourName + ' ?');
console.log(qFive);


if (qFive.toUpperCase() === 'YES'){
  qFive= 1;
} else if (qFive.toUpperCase() === 'NO') {
  qFive= 0;}

switch(qFive) {
case 1:
  alert('Thats awesome, ' + yourName + ' Your answer is correct 🤓');
  scoreAll=scoreAll+1;
  break;

case 0:
  alert('Your answer is wrong, ' + yourName + ' no problem the explanation will desply in the screen now 🙂');
  break;

default:
  alert('Try again, ' + yourName + ' Answer withe YES or NO !!');
}




for (let i = 0; i<4 ; i++){

  let qSix = prompt('How many work experience years do you think that i have '+ yourName + '?');
  console.log(qSix);

  if(Number(qSix) === 5){
    alert('Thats awesome, ' + yourName + ' Your answer is correct 🤓');
    scoreAll=scoreAll+0.25;
    break;
  }
  else if(Number(qSix) > 3 && Number(qSix) < 7 && Number(qSix) !== 5){
    console.log(Number(qSix));
    alert('Your answer is wrong, ' + yourName + ' but you are very close; you can TRY again 🙂');
  }
  else {
    alert('Your answer is wrong, ' + yourName + ' and you go very far; TRY again 🙂');
  }

  if (i === 3){alert ('The answer is 5 years, thank you 😃 '+ yourName );}
}




let belovedYears = ['1990', '2000', '2007', '2020', '2021'];

let finalExten = [', it was my bithyear, so sure i am love it 😃💖',
  ', its the first year i commit praying seriously and decided to set a goal in life, so i love this year 😃💖',
  ', it was the TAWJIHI year, i enjoyed this year so much, it was the most beautiful year in whole my life 😃🤓💖',
  ', 2020 was a very beautiful year, i am an introverted person, so 2020 had let me spend a lot of time at home after 5 years of work exhausted 😃🤓',
  ', i just very excited in this scholarship, it had returned the enthusiasm to me after losing it for many years 😃🤩'
];



for(let i = 0; i<= belovedYears.length; i++)
{

  let qSeven = prompt('I am 30 y/o, and I like 5 years in my life, Can you guess these years with me 😉 '+ yourName + ' ? ');
  console.log(qSeven);

  if(belovedYears[i] === qSeven)
  {
    alert('Thats awesome, ' + yourName + ' Your answer is correct 🤓' + finalExten[i]);
    scoreAll=scoreAll+0.2;
  }
  else if (belovedYears[i] !== qSeven)
  {
    alert('Your answer is wrong, ' + yourName + '; you have more ' + (5-i) + ' attempt to try 🙂');
  }

  if (i === 5 ){
    alert('Hey '+ yourName + ', The correct answers are 1990, 2000, 2007, 2020, 2021 😉 ');
    break;
  }
}



console.log(scoreAll);

if (scoreAll >= 5){
  alert('GREAT '+ yourName + '! Your score is ' + scoreAll + '/7 🤗');
}
else if (scoreAll<5){
  alert('You should TRY AGAIN ' + yourName+ ', your score is ' + scoreAll + '/7 🤕');
}



