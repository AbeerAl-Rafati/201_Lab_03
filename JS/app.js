'use strict';


alert('HELLO DEAR 😎');

let yourName = prompt('What is your name, for please?');
let scoreAll = 0;


yourName= yourName.toUpperCase();

alert('YOU ARE WELCOME '+ yourName+ ' 😃');
alert('Lets START 😃 !!');




webPage();




//--------------------------------------------------------------------------------------------


//1
function answerYes(){
  alert('Thats awesome, ' + yourName + ' Your answer is correct 🤓');
  scoreAll++;
}

function answerNo(){
  alert('Your answer is wrong, ' + yourName + ' no problem the explanation will desply in the screen now 🙂');
}

function answerOpps(){
  alert('Try again, ' + yourName + ' Answer withe YES or NO !!');
}


//2
function allInOne(q){
  let qFlag= -1;
  if (q.toUpperCase() === 'YES'){
    qFlag= 1;
  } else if (q.toUpperCase() === 'NO') {
    qFlag= 0;
  }


  switch(qFlag) {
  case 1:
    answerYes();
    break;

  case 0:
    answerNo();
    break;

  default:
    answerOpps();
  }

}


//3
function webPage(){
  let qOne = prompt ('Did you hear about PharmD specialty ' + yourName + ' ?');
  allInOne(qOne);


  let qTwo = prompt('Did you hear about JUST universety ' + yourName + ' ?');
  allInOne(qTwo);

  let qThree = prompt('Did you hear about IMC ' + yourName + ' ?');
  allInOne(qThree);

  let qFour = prompt('Did you hear about PMP ' + yourName + ' ?');
  allInOne(qFour);

  let qFive = prompt('Did you hear about E-health ' + yourName + ' ?');
  allInOne(qFive);

  q6();

  q7();

  mark();
}

//4

function q6() {


  for (let i = 0; i<4 ; i++){

    let qSix = prompt('How many work experience years do you think that i have '+ yourName + '?');

    if(Number(qSix) === 5){
      answerYes();
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


}


//5
function q7(){
  let belovedYears = ['1990', '2000', '2007', '2020', '2021'];

  let finalExten = [', it was my birthyear, so sure i am love it 😃💖',
    ', its the first year i commit praying seriously and decided to set a goal in life, so i love this year 😃💖',
    ', it was the TAWJIHI year, i enjoyed this year so much, it was the most beautiful year in whole my life 😃🤓💖',
    ', 2020 was a very beautiful year, i am an introverted person, so 2020 had let me spend a lot of time at home after 5 years of work exhausted 😃🤓',
    ', i just very excited in this scholarship, it had returned the enthusiasm to me after losing it for many years 😃🤩'
  ];

  let qSeven = prompt('I am 30 y/o, and I like 5 years in my life, Can you guess these years with me '+ yourName + ' ? \n you only have 6 attempts 😉');

  let year= false;

  for (let i = 0; i<6 ; i++){

    for(let x = 0; x<= belovedYears.length; x++){

      if (qSeven === belovedYears[x]){
        year = true;
      }
    }

    if (year){
      alert('Thats awesome, ' + yourName + ' Your answer is correct 🤓' + finalExten[belovedYears.indexOf(qSeven)]);
      scoreAll=scoreAll+0.2;
      break;
    }
    else {
      alert('Your answer is wrong, ' + yourName + '; you have more ' + (5-i) + ' attempt to try 🙂');
    }

    qSeven = prompt('I am 30 y/o, and I like 5 years in my life, Can you guess these years with me 😉 '+ yourName + ' ? ');

    if (i === 5 ){
      alert('Hey '+ yourName + ', The correct answers are 1990, 2000, 2007, 2020, 2021 😉 ');
      break;
    }

  }
}

//6
function mark(){
  if (scoreAll >= 5){
    alert('GREAT '+ yourName + '! Your score is ' + scoreAll + '/7 🤗');
  }
  else if (scoreAll<5){
    alert('You should TRY AGAIN ' + yourName+ ', your score is ' + scoreAll + '/7 🤕');
  }
}


