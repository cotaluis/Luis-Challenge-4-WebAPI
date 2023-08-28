const quizData = [
    {
        question: "What Does Js Stand For?",
        options: ["Java Syntax", "JavaScript", "Just Sourcing"],
        answer: 0
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "let"],
        answer: 0
    },
    {
        question: "What is the purpose of the 'console.log()' function in JavaScript?",
        options: ["To display a message box", "To log errors in the console", "To output data to the browser's console"],
        answer: 0
    },
    {
        question: "What does the acronym DOM stand for in the context of web development?",
        options:["Document Object Model", "Data Object Management", "Document Object Mapping","Direct Object Manipulation"],
        answer: 0

    },
    {
        question:"How can you create a new array in JavaScript?",
        options:["New Array()","CreateArray()", "[] (empty square brackets)", "newArray()"],
        answer: 0
    },
];

const quizContainer = document.getElementById("quiz");
const startButton = document.getElementById("start-button");
let currentQuestionIndex = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
}

function showQuestion() {
    const questionObj = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
    <h3>${currentQuestionIndex + 1}. ${questionObj.question}</h3>
    ${generateOptions(questionObj.options)}
    <button id="next-button">Next</button>
  `;

    const nextButton = document.getElementById("next-button");
    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            showResults();
        }
    });
}

function generateOptions(options) {
    let optionsHTML = "";
    for (let i = 0; i < options.length; i++) {
        optionsHTML += `
      <input type="radio" name="options" value="${i}" id="option${i}">
      <label for="option${i}">${options[i]}</label><br>
    `;
    }
    return optionsHTML;
}

function showResults() {
    quizContainer.innerHTML = `<h2>Quiz Results</h2><p>You have completed the quiz!</p>`;
}
