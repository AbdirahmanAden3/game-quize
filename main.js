const btn = document.querySelector("#next");
const questions = document.querySelector("#question");
let stop_count_question = document.querySelector("#stop_count_question");
let number = document.querySelector("#number");
let progress = document.querySelector("#progress");
let levelWord = document.querySelector("#levelWord");
let start = document.querySelector("#start");




let options; // Declare options to be used later

let index = 0;
let score = 0;
let count = 0;

const question = [
  {
    questions: "What is the capital of Puntland?",
    answers: [
      { text: "Garowe", correct: false },
      { text: "Bosaso", correct: false },
      { text: "Galkacyo", correct: false },
      { text: "Qardho", correct: true },
    ],
  },
  {
    questions: "What is the capital of Somalia?",
    answers: [
      { text: "Bosaso", correct: false },
      { text: "Banaadir", correct: false },
      { text: "Garowe", correct: false },
      { text: "Mogadishu", correct: true },
    ],
  },
  {
    questions: "What is the capital of Kenya?",
    answers: [
      { text: "Nairobi", correct: true },
      { text: "Cairo", correct: false },
      { text: "Kampala", correct: false },
      { text: "Kigali", correct: false },
    ],
  },
  {
    questions: "What is the capital of Sudan?",
    answers: [
      { text: "Khartoum", correct: true },
      { text: "Kampala", correct: false },
      { text: "Oman", correct: false },
      { text: "Kigali", correct: false },
    ],
  },
  {
    questions: "What is the capital of Libya?",
    answers: [
      { text: "sudan", correct: false },
      { text: "japan", correct: false },
      { text: "Libya", correct: false },
      { text: "Tripoli", correct: true },
    ],
  },
];

const getQuestion = () => {
  let html = `
    <div class="questions">
        <h2 id="question" class="question">${question[index].questions}</h2>
    </div>
    <div class="answers">
        <p>Choose the correct Answer</p>
    </div>
    <div class="icon">
        <i class="fa-solid fa-circle-question"></i>
    </div>
    <div class="options" id="option">
        <div class="answer">
            <p class="paragraph" id="answer">${question[index].answers[0].text}</p>
        </div>
        <div class="answer">
            <p class="paragraph" id="answer">${question[index].answers[1].text}</p>
        </div>
        <div class="answer">
            <p class="paragraph" id="answer">${question[index].answers[2].text}</p>
        </div>
        <div class="answer">
            <p class="paragraph" id="answer">${question[index].answers[3].text}</p>
        </div>
    </div>
  `;
  questions.innerHTML = html;

  // Re-assign options after the question is rendered
  options = document.getElementById("option");
  // Add click event listener to the new options
  options.addEventListener("click", (e) => {
    if (e.target.classList.contains("paragraph")) {
      let value = e.target.innerText;
      const selectedAnswer = question[index].answers.find(
        (item) => item.text === value
      );
      if (selectedAnswer.correct === true) {
        e.target.classList.add("correct");
        score++;
        progressBar();    
      } else {
        e.target.classList.add("wrong");
      }
    }
  });
};

// Initial question load
getQuestion();
// Event listener for the Next button
btn.addEventListener("click", () => {
  index++;  
  if (index < question.length) {
    getQuestion();
  } else {
    // Show result
  
    questions.innerHTML = `
  
    <h2 id="question" class="question">You score is ${score}/${question.length}</h2>
    `;
    btn.innerText = "Restart";
    btn.addEventListener("click", () => {
      
      location.reload();
    })

 ;
  }
});

// number counter
let number_count = 0;
setInterval(() => {
  if (number_count == 2) {
    index++;
    if (index < question.length) {
      getQuestion();
      number_count = 0;
      count++;
      progressNumber();
    } else {
    
    }
  } else {
    number_count++;
    stop_count_question.innerText = number_count;
    questions.innerHTML = `
    <h2 id="question" class="question">You score is ${score}/${question.length}</h2>
    `;
    

    getQuestion();
  }
}, 1000);

// progress bar

const progressBar = () => {
  if (score !== 0) {
    const progresWidth = ((index + 1) / question.length) * 100;
    progress.style.width = `${progresWidth}%`;
    ``;
    levelWord.innerText = `your leve is: ${(score / question.length) * 100}%`;
  } else {

  }
};
progressBar();

const progressNumber = () => {
  number.innerHTML = `${count + 1}/${question.length}`;


};



progressNumber();



