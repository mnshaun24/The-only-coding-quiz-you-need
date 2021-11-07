// create score variables
var highScoreList = document.getElementById("high-score");

var highScore = 0

var saveScore = function() {
    localStorage.setItem("High Score", highScore);
}

// populate high scores elements

var highScoreDisplay = function() {
    var highScorePlayer = document.createElement("div");
    
}

// check input button click against correct answer

var answerQuestion = function(optionText) {
    console.log("answerQuestion starting");
    if (optionText === quizQuestions[questionIndex].correctAnswer) {
        timeLeft = timeLeft +10  
        console.log("great job")      
    }
    else {
        timeLeft = timeLeft -10
        console.log("try again")
    };
    showNext();
};

// previous item goes away and new item displays

var clearAll = function() {
document.getElementById("quiz-stem").innerHTML = "";
document.getElementById("quiz-options").innerHTML= "";
};

// value is set to -1 so that the original start button begins at array = 0
var questionIndex = -1

var quizQuestions = [
    {
        question: "Welcome to The Only Coding Quiz You Need. Try to complete all the questions before time runs out. Compete for a high score.",
        answers: ["Start!"],
        correctAnswer:"Start!"
    },
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

    if (questionIndex < 9 ) {

        clearAll();

        // advance quiz to next slide
        questionIndex++

        // make sure new stem appears with content from array
        var questionTextEl = document.createElement("div");
        questionTextEl.textContent = quizQuestions[questionIndex].question;
        questionTextEl.className = "quiz-slides";
        document.getElementById("quiz-stem").appendChild(questionTextEl);
        questionTextEl.id = "createdStemText";
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
        btnOption1.id = "btn1";
        btnOption1.addEventListener("click", function() {
            answerQuestion(btnOption1.innerHTML);
        });

        var btnOption2 = document.createElement("button");
        btnOption2.textContent = quizQuestions[questionIndex].answers[1];
        btnContainerEl.appendChild(btnOption2);
        btnOption2.className = "button-setup";
        btnOption2.id = "btn2";
        btnOption2.addEventListener("click", function() {
            answerQuestion(btnOption2.innerHTML)
        });

        var btnOption3 = document.createElement("button");
        btnOption3.textContent = quizQuestions[questionIndex].answers[2];
        btnContainerEl.appendChild(btnOption3);
        btnOption3.className = "button-setup";
        btnOption3.id = "btn3";
        btnOption3.addEventListener("click", function() {
            answerQuestion(btnOption3.innerHTML)
        });

        var btnOption4 = document.createElement("button");
        btnOption4.textContent = quizQuestions[questionIndex].answers[3];
        btnContainerEl.appendChild(btnOption4);
        btnOption4.className = "button-setup";
        btnOption4.id = "btn4";
        btnOption4.addEventListener("click", function() {
            answerQuestion(btnOption4.innerHTML)
        });
    }
    else {
        saveScore();
        clearAll();
        clearInterval(countdownTimer);
        console.log("we did it!");
        highScoreList.style.display = "flex";
    }
};

showNext();

// set up quiz timer. I got the following simple code idea from https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
var timeLeft = 45
var countdownTimer = setInterval(function() {
    if(timeLeft <= 0){
        clearInterval(countdownTimer);
            clearAll();
        window.alert("Time is up!");
        highScoreList.style.display = "flex";
    }
    else {
        document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
    }
    timeLeft --;
}, 1000);