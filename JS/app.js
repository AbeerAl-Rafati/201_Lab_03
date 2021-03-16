'use strict';


alert('HELLO DEAR 😎');

let yourName = prompt('What is your name, for please?');

console.log(yourName);

yourName= yourName.toUpperCase();

alert('YOU ARE WELCOME '+ yourName+ ' 😃');
alert('Lets START 😃 !!');


function answerYes(){
  alert('Thats awesome, ' + yourName + ' Your answer is correct 🤓');
  console.log(1);
}

function answerNo(){
  alert('Your answer is wrong, ' + yourName + ' no problem the explanation will desply in the screen now 🙂');
}

function answerOpps(){
  alert('Try again, ' + yourName + ' Answer withe YES or NO !!');
}



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

let qOne = prompt ('Did you hear about PharmD specialty ' + yourName + ' ?');
//console.log(qOne);
allInOne(qOne);


let qTwo = prompt('Did you hear about JUST universety ' + yourName + ' ?');
//console.log(qTwo);
allInOne(qTwo);

let qThree = prompt('Did you hear about IMC ' + yourName + ' ?');
//console.log(qThree);
allInOne(qThree);

let qFour = prompt('Did you hear about PMP ' + yourName + ' ?');
//console.log(qFour);
allInOne(qFour);

let qFive = prompt('Did you hear about ehealth ' + yourName + ' ?');
//console.log(qFive);
allInOne(qFive);



