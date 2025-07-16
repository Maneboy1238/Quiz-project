
const questions = [
  {
    question: "Who was the first scientist to make discoveries about cells?",
    options: ["Felix Dujardin", "Theodor Schwann", "Rudolf Virchow", "None of the above "],
    correctAnswer: "None of the above"
  },
  {
    question: "Which Scientist said that plants are composed of cells ?",
    options: ["Charles Dickens", "Mathias Schledein", "George Orwell", "None of the above"],
    correctAnswer: "Mathias Schledein"
  },
  {
    question: "The living content of a cell is ?",
    options: ["Protoplasm", "Cytoplasm", "cytosol", "Plasma Membrane"],
    correctAnswer: "Protoplasm"
  },
  {
    question: "The production of proteins in a cell starts from ?",
    options: ["Nucleus", "Ribosomes", "chromatin thread", "Nucleolus"],
    correctAnswer: "Nucleolus"
  },
  {
    question: "Which of the following organelles  have a double layer membrane?",
    options: ["cell wall", "chromoplasts", "chloroplasts", "None of the above"],
    correctAnswer: "chloroplasts"
  },
  {
    question: "The organelles of a cell are located in _____",
    options: ["Plasma Membrane", "Cell wall", "cytoplasm", "Protoplasm"],
    correctAnswer: "cytoplasm"
  },
  {
    question: "__________ is freely permeable?",
    options: ["plasma membrane", "Cell wall", "Vacuole", "None of the above"],
    correctAnswer: "Cell wall"
  },
  {
    question: "The outer membrane of the contractile vacuole is ?",
    options: ["ponoplast", "honoplast", "sonoplast", "tonoplast"],
    correctAnswer: "tonoplast"
  },
  {
    question: "______ is found in the animal cell?",
    options: ["cell wall", "None", "contractile vacuole", "food vacuole"],
    correctAnswer: "food vacuole"
  },
  {
    question: "The cell membrane is made up of the following except?",
    options: ["phospholipids", "starch granules", "carbohydrates", "None of the above"],
    correctAnswer: "starch granules"
  },
  {
    question: "which of the following is not used for storage?",
    options: ["Leucoplast", "Amyplast", "eliaplast", "None of the above"],
    correctAnswer: "eliaplast"
  },
  {
    question: "Which of the following is the first 22 pairs of chromosomes",
    options: ["Heterosomes", "Chromosomes", "Autosomes", "None of the above"],
    correctAnswer: "Autosomes"
  },
  {
    question: "which of the following is the splitting of the nucleus?",
    options: ["Mitosis", "cytokinesis", "karyokinesis", "None of the above"],
    correctAnswer: "karyokinesis"
  },
  {
    question: "The power house of a cell is  ?",
    options: ["Mitochondria", "Nucleus", "Chloroplasts", "None of the above"],
    correctAnswer: "Mitochondria"
  },
  {
    question: "The suicide bag of a cell a known as ?",
    options: ["Lysosomes", "Golgi body", "Cell sap", "None of the above"],
    correctAnswer: "Lysosomes"
  },
  {
    question: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    correctAnswer: "8"
  },
  {
    question: "The placing of a plant cell in a hypertonic solution gives __ to occur?",
    options: ["Haemolysis", "Turgidity", "plasmolysis", "Crenation"],
    correctAnswer: "plasmolysis"
  },
  {
    question: "Which of the following helps in osmoregulation",
    options: ["Contractile Vacuole", "Food Vacuole", "Cell sap", "None of the above"],
    correctAnswer: "Cell sap"
  },
  {
    question: "The pores of the cell wall are known as ?",
    options: ["plasimodemata", "plasdemata", "plasmademata", "None of the above"],
    correctAnswer: "None of the above"
  },
  {
    question: "Which of the following is an inclusion?",
    options: ["lipid", "phospholipids", "Nucleus", "None of the above"],
    correctAnswer: "lipid"
  },
  {
    question: "The foldings of the mitochondria is ",
    options: ["Cristean", "Criste", "Cristae", "Crustaceans"],
    correctAnswer: "Cristae"
  },
  {
    question: "The mouth like structure of the snail is known as ?",
    options: ["Pedipalps", "Radula", "Radule", "None of the above"],
    correctAnswer: "Radula"
  },
  {
    question: "What is the main gas in the air we breathe?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Nitrogen"
  },
  {
    question: "A character that is controlled by many genes is known as a ?",
    options: ["Homogenic character", "Na u know i no know am ", "Heterogenic character", "Polygenic Character"],
    correctAnswer: "Polygenic Character"
  },
  {
    question: "Purines are made up of ?",
    options: ["adenine and Guanine ", "Cytosine and Thymine ", "adenine and cytosine ", "Guanine and thymine"],
    correctAnswer: "adenine and Guanine"
  },
  {
    question: "The gel like substance in the cytoplasm is known as ?",
    options: ["Gelly", "Gam", "Cytosol", "i just dash una make u at least get one"],
    correctAnswer: "Cytosol"
  },
  {
    question: "The backbone of a Dna is made up of units of ",
    options: ["Hexose Sugar", "Heptose Sugar", "Pentose Sugar", "None of the above"],
    correctAnswer: "Pentose Sugar"
  },
  {
    question: "which of the following is not a double layer membrane?",
    options: ["chromoplast", "Mitochondria", "chloroplasts", "Nucleus"],
    correctAnswer: "chromoplast"
  },
  {
    question: "The most developed invertebrate is ?",
    options: ["Myriapoda", "Echinodermata", "Insecta", "None of the above"],
    correctAnswer: "Echinodermata"
  },
  {
    question: "Which of the following does fish uses to breathe ",
    options: ["Gill raker", "Gill filament", "Gill Chamber", "None of the above"],
    correctAnswer: "Gill filament"
  }
  
    
];


let score = 0;
let currentQuestionIndex = 0;

let questionNumber = 1;

  
  let totalSeconds = 180;
  
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
      <input type="radio">${option}</label>
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

