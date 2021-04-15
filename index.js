let readlineSync = require('readline-sync');

let userName='';
function welcome() {
 userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + ", Let us have a quiz on friends .");
  console.log("------------------");
  console.log("------------------");
}

welcome();


let score = 0;
function play(question,choices,answer){
  console.log(question)
  
    for(let i =0;i<choices.length;i++){
      console.log(choices[i]);
    }
    let userAnswer = readlineSync.question();
    
    // console.log(userAnswer);



  if(userAnswer.toLowerCase() === answer){
    score = score +1;
    console.log("Right");
  }else{
    console.log("Wrong");
  }

  console.log("current score: ",score);
  console.log("------------------------");

}

let questions = [{
  question:"The series Friends is set in which city?",
  choices:['a:Los Angeles','b:New York City','c:Miami'],
  answer:"b"
},
{
  question:"What pet did Ross own?",
  choices:['a:A dog named Keith','b:A rabbit called Lancelot','c:A monkey named Marcel'],
  answer:"c"
},
{
  question:"What is Monica skilled at?",
  choices:['a:Bricklaying','b:Cooking','c:Singing'],
  answer:"b"
}
];

for(let i =0; i<=questions.length-1;i++){
  let currentQuestion = questions[i];
  
  play(currentQuestion.question,currentQuestion.choices,currentQuestion.answer);
}

console.log(userName + " total score = " + score);