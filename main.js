
const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "George Orwell", "Jane Austen"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Mars"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctAnswer: "Pacific"
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    correctAnswer: "Au"
  },
  {
    question: "What is 9 × 7?",
    options: ["56", "63", "72", "81"],
    correctAnswer: "63"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "In which year did Nigeria gain independence?",
    options: ["1950", "1960", "1965", "1970"],
    correctAnswer: "1960"
  },
  {
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Kano", "Ibadan"],
    correctAnswer: "Abuja"
  },
  {
    question: "Which is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "What is the square root of 81?",
    options: ["9", "8", "7", "6"],
    correctAnswer: "9"
  },
  {
    question: "Which country is known for sushi?",
    options: ["China", "Japan", "Thailand", "Vietnam"],
    correctAnswer: "Japan"
  },
  {
    question: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    correctAnswer: "8"
  },
  {
    question: "What is the freezing point of water?",
    options: ["0°C", "32°C", "100°C", "10°C"],
    correctAnswer: "0°C"
  },
  {
    question: "Which continent is Egypt in?",
    options: ["Asia", "Africa", "Europe", "America"],
    correctAnswer: "Africa"
  },
  {
    question: "How many hours are there in a day?",
    options: ["24", "12", "36", "48"],
    correctAnswer: "24"
  },
  {
    question: "Which is the smallest planet in the solar system?",
    options: ["Mercury", "Mars", "Venus", "Pluto"],
    correctAnswer: "Mercury"
  },
  {
    question: "What language is spoken in Brazil?",
    options: ["Spanish", "English", "Portuguese", "French"],
    correctAnswer: "Portuguese"
  },
  {
    question: "Which instrument has keys, pedals, and strings?",
    options: ["Guitar", "Violin", "Piano", "Flute"],
    correctAnswer: "Piano"
  },
  {
    question: "What is the main gas in the air we breathe?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Nitrogen"
  },
  {
    question: "What is H2O?",
    options: ["Salt", "Water", "Air", "Sugar"],
    correctAnswer: "Water"
  },
  {
    question: "How many days are in a leap year?",
    options: ["365", "366", "364", "367"],
    correctAnswer: "366"
  },
  {
    question: "Who was the first president of the USA?",
    options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
    correctAnswer: "George Washington"
  },
  {
    question: "What part of the body pumps blood?",
    options: ["Lungs", "Heart", "Brain", "Kidney"],
    correctAnswer: "Heart"
  },
  {
    question: "Which animal is known as the king of the jungle?",
    options: ["Elephant", "Tiger", "Lion", "Cheetah"],
    correctAnswer: "Lion"
  },
  {
    question: "Which planet has rings around it?",
    options: ["Saturn", "Earth", "Venus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    question: "What is the opposite of 'cold'?",
    options: ["Cool", "Hot", "Warm", "Frozen"],
    correctAnswer: "Hot"
  },
  {
    question: "How many months make a year?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12"
  }
];


let score = 0;
let currentQuestionIndex = 0;

let questionNumber = 1;

  
  let totalSeconds = 600;
  
  const quizBox = document.querySelector('.quiz-box');
  
  
  const nextButton = document.querySelector('.next-btn');
 
  let userAnswer = {};
  
  showQuestion();
 
   

function showQuestion () {
  
 
  
  const currentQuestion =  questions[currentQuestionIndex];
  
  const quiz = currentQuestion.question;
  
  const option = currentQuestion.options;
  
  let output = '';
    
    output += `<p>Question ${questionNumber} of ${questions.length}</p>`
  output += `<p class="question">${quiz}</p>`
  
  option.forEach(
    
    (option) => {
      
      output += `
      <div class="wrapper-btn"><label class="opt-button">
      <input type="radio" >${option}</label>
      </div>
      
      `; 
        
      }
      
     
      
      
    
    )
    //output += `<a  class="submitBtn"><button>Submit</button></a>`
    quizBox.innerHTML = output;
    
     
  
  
  
    const btn = document.querySelectorAll('.opt-button');
    
    const savedAnswer = userAnswer[currentQuestionIndex];
    
    btn.forEach(
      (button) => {
    
        
        if (typeof savedAnswer === 'object' &&  savedAnswer !== null) {
        if (button.innerText === savedAnswer.correct) {
          button.classList.add('correct');
        }
        else if ( button.innerText === savedAnswer.selected && button !== savedAnswer.correct) {
          button.classList.add('bad');
        }
        button.style.pointerEvents = 'none';
        }
        
       
      }
      
    )
    
    btn.forEach((button) => {
  button.addEventListener('click', () => {
      
      
    checkAnswer(currentQuestion.correctAnswer,button, btn, currentQuestion.question);
    
  
  });
});




}


  
function checkAnswer(correctAnswer,clickedButton, btn, currentQuestion) {
//console.log(clickedButton);
const selected = clickedButton.innerText.trim();
if (!userAnswer[currentQuestionIndex]) {
if (selected === correctAnswer) {
  score++;
}
}
console.log(score);
 userAnswer[currentQuestionIndex] = {
   question: currentQuestion,
   selected: clickedButton.innerText,
   correct: correctAnswer
 }
 console.log(userAnswer[currentQuestionIndex].question)
// let selected = userAnswer.selected;
// countScore(clickedButton, correctAnswer);
 
  btn.forEach(
    (button) => {
      
      const input = button.querySelectorAll('input');
      if (button.innerText === correctAnswer) {
        button.classList.add('correct');
       
        
      }
     else if (button === clickedButton && button.innerText !== correctAnswer) {
        
        button.classList.add('bad')
        
      }
     
      if (input) input.disabled = true; 
      button.style.pointerEvents = 'none';

         }
          )

 
}

function nextQuestion() {
  questionNumber ++;
  currentQuestionIndex++;
  
  if(currentQuestionIndex < questions.length)  {
    showQuestion();
  }
  if (currentQuestionIndex === questions.length - 1) {
    nextButton.innerHTML = 'submit'
  }
  if(currentQuestionIndex > 0) {
    document.querySelector('.prev-btn').style.display = 'block';
    nextButton.style.transform = 'translateX(2rem)';
  }
//if (currentQuestionIndex < 1){
   // document.querySelector('.prev-btn').style.display = 'none';
//  }  
  
}
function displayScore() {
  let message = '';
  let emoji = '';
  
  
  if (score < 10) {
    message = 'Not your day';
    emoji = '😥';
  }
  else if (score < 15) {
    message = 'Getting there, champ';
    emoji = '🙂';
  }
  else if (score < 20) {
    message = 'Pretty good job';
    emoji = '😎';
  }
  else if (score < 30) {
    message = 'Solid Performance';
    emoji = '🔥';

  }
  else if (score === 31) {
    message = 'Legendary. No cap'
    emoji = '🏆';
  }
  
  
  
  
  
  
    document.body.innerHTML = `
      <div class="reviewQues">
     </div>
      <section>
    
    
    <div class="section">
    <h2 class="emoji">${emoji}</h2>
    
    </div>
    <p>${score}/${questions.length}</p>
    <p>${message}</p>
    
    <a><button class="review">Review Questions</button></a>
  </section>

    `;
   
    document.querySelector('.review').addEventListener('click', 
  () => {
    document.querySelector('.reviewQues').style.display = 'block';
    setTimeout(
      () => {
        
      
    document.querySelector('.reviewQues').style.zIndex = 1000;
    document.querySelector('.reviewQues').style.transform = 'translateX(0%)';
    
    reviewQuestion();
      }
    , 100)
  }
)

  
   
}

function reviewQuestion() {
  let display = '';
  let ques = 0;
  display += `<div class="header">
  <a class="close">
  <i class="fas fa-arrow-left"></i></a>
  <h1>Reviewed Questions<h1>
  </div>`;
  display += `
   <div class="are">
      </div>
  `;
  questions.forEach((questionObj, index) => {
  ques++;
  const answer = userAnswer[index];
  
  let picked;
  let correct;
  let question;
  
  if (answer && answer.selected) {
    picked = answer.selected;
  } else {
    picked = 'Nil';
  }

  if (answer && answer.correct) {
    correct = answer.correct;
  } else {
    correct = questionObj.correctAnswer;
  }

  if (answer && answer.question) {
    question = answer.question;
  } else {
    question = questionObj.question;
  }

  display += `
    <div class="re">
      <p>Question ${ques}</p>
      <p>Question: ${question}</p>
      <p>Answer: ${correct}</p>
      <p>Picked: ${picked}</p>
    </div>
  `;
});
  document.querySelector('.reviewQues').innerHTML = `${display}`;
  console.log(display);
  
  document.querySelector('.close').addEventListener('click', 
  () => {
    document.querySelector('.reviewQues').style.zIndex = 0;
    document.querySelector('.reviewQues').style.transform = 'translateX(100%)';
    setTimeout(
      () => {
        document.querySelector('.reviewQues').style.display = 'none';
      }
    ,500)
  }
)
}
function prevQuestion () {
  currentQuestionIndex = currentQuestionIndex - 1;
  questionNumber = questionNumber - 1;  
  
  if(currentQuestionIndex >= 0 &&  currentQuestionIndex < questions.length)  {
    showQuestion();
  }
   if (currentQuestionIndex < questions.length) {
    nextButton.innerText = 'next'
  }
  
}
nextButton.addEventListener('click', () => {
  // If we're already on the LAST question
  if (currentQuestionIndex === questions.length - 1) {
    // show popup
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.popup-overlay').style.display = 'block';
  } else {
    nextQuestion();
  }
});

const back = document.querySelector('.back');
const submit = document.querySelector('.submit');
back.addEventListener ('click',
  ()=> {
   document.querySelector('.popup').style.display = 'none';
    document.querySelector('.popup-overlay').style.display = 'none'; 
  }
)
submit.addEventListener('click',
  ()=> {
    displayScore();
    
  }
)
const prevBtn = document.querySelector('.prev-btn');
prevBtn.addEventListener('click', 
  () => {
    prevQuestion();
  }
)



let timer;
function seconds() {
  
let minute;
let seconds;

let pTimer = document.querySelector('.timer');

minute = Math.floor(totalSeconds/60);


     seconds = totalSeconds % 60;
     
     if (seconds < 10) seconds = '0' + seconds.toString();
     else {
       seconds.toString()
     }
     if (minute < 10) minute = '0' + minute.toString();
     else {
      minute.toString();
     }
     
pTimer.innerHTML  = `${minute} :  ${seconds}`;

 timer = setInterval(
  () => {
    totalSeconds = totalSeconds - 1;
    
     minute = Math.floor(totalSeconds/60);
     seconds = totalSeconds % 60;
     
     
     if (seconds < 10) seconds = '0' + seconds.toString();
     else {
       seconds.toString()
     }
     if (minute < 10) minute = '0' + minute.toString();
     else {
      minute.toString();
     }
     pTimer.innerHTML  = `${minute} :  ${seconds}`;
     if (totalSeconds === 0) {
       clearInterval(timer)
       displayScore();
     }
  }
  , 1000
);



}
seconds();

