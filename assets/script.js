var startQuiz = true;

// create score variables
var highScore = 0

var saveScore = function() {
    localStorage.setItem("High Score", highScore);
}
// end score variables


// Create button series

// button click captures the button string

var optionSelect = function () {
    addEventListener("click", function () {
        console.log(this.getAttribute("value"));

    });
}

// compare captured string to correctAnswer string and determine if answer is correct
var checkAnswer = function(input) {
    if (input == correctAnswer) {
        
    }
}

// correct answer increases time and incorrect score decreases time

var questionIndex = 0

var quizQuestions = [
    {  
       question: "What serves as a collection of random pieces of related information?",
       answers: ["Argument", "Method", "Array", "Function"],
       correctAnswer: "Array"
    },
    {
        question: "What symbol denotes an id class selector in CSS?",
        answers: ["@", "#", ".", "$"],
        correctAnswer: "#"
    },
    {
        question: "What command is a best practice before modifying the workflow in the command line?",
        answers: ["git branch", "git status", "git merge", "git push"],
        correctAnswer: "git branch"
    },
    {
        question: "Which command is executed last in Cascading Style Sheets?",
        answers: ["Topmost", "Longest", "Shortest", "Bottommost"],
        correctAnswer: "Bottommost"
    },
    {
        question: "What kind of property is the CSS value 'flex'?",
        answers: ["Border", "Grid", "Display", "Font"],
        correctAnswer: "Display"
    },
    {
        question: "What allows better optimization for different screen sizes?",
        answers: ["Image-rendering", "Inline display", "JavaScript", "Media Queries"],
        correctAnswer: "Media Queries"
    },
    {
        question: "Which language provides the bones and structure of a website?",
        answers: ["CSS", "HTML", "JavaScript", "Java"],
        correctAnswer: "HTML"
    },
    {
        question: "How many elements can a class be tied to in HTML?",
        answers: ["0", "1", "2", "2+"],
        correctAnswer: "2+"
    },
    {
        question: "What is the best practice way to type in JavaScript?",
        answers: ["All caps", "No caps", "Camel caps", "Cat caps"],
        correctAnswer: "Camel caps"
    }
];

// create function to cycle through questions in array
var showNext = function() { 

    // advance quiz to next slide
    questionIndex++

    // make sure new stem appears with content from array
    var questionTextEl = document.createElement("div");
    questionTextEl.textContent = quizQuestions[questionIndex].question;
    questionTextEl.className = "quiz-slides";
    document.getElementById("quiz-stem").appendChild(questionTextEl);
    // update score 
    // use remove to remove the created div

    // create container div to display four option buttons
    var btnContainerEl = document.createElement("div");
    btnContainerEl.className = "btn-container";
    document.getElementById("quiz-options").appendChild(btnContainerEl);

    // create each button option
    var btnOption1 = document.createElement("button");
    btnOption1.textContent = quizQuestions[questionIndex].answers[0];
    btnContainerEl.appendChild(btnOption1);
    btnOption1.className = "button-setup";

    var btnOption2 = document.createElement("button");
    btnOption2.textContent = quizQuestions[questionIndex].answers[1];
    btnContainerEl.appendChild(btnOption2);
    btnOption2.className = "button-setup";


    var btnOption3 = document.createElement("button");
    btnOption3.textContent = quizQuestions[questionIndex].answers[2];
    btnContainerEl.appendChild(btnOption3);
    btnOption3.className = "button-setup";


    var btnOption4 = document.createElement("button");
    btnOption4.textContent = quizQuestions[questionIndex].answers[3];
    btnContainerEl.appendChild(btnOption4);
    btnOption4.className = "button-setup";

    addEventListener("click", optionSelect());
};


showNext();


// set up high score function

// set up quiz timer. I got the following simple code idea from https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
// var timeLeft = 45
// var countdownTimer = setInterval(function() {
//     if(timeLeft <= 0){
//         clearInterval(countdownTimer);
//         window.alert("Time is up!");
//         return highScore;
//     }
//     else {
//         document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
//     }
//     timeLeft --;
// }, 1000);

// things I don't know how to do: 1) advance on click guessing clickevent == correctAnswer 2) how to advance I get error on .question 3) 