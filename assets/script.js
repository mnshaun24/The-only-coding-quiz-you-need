var startQuiz = true;

var quizQuestions = [
    {  
       question: "What serves as a collection of random pieces of related information?",
       answers: {
           A: "Argument",
           B: "Method",
           C: "Array",
           D: "Function"
       },
       correctAnswer: "C"
    },
    {
        question: "What symbol denotes an id class selector in CSS?",
        answers: {
            A: "@",
            B: "#",
            C: ".",
            D: "$"
        },
        correctAnswer: "B"
    },
    {
        question: "What command is a best practice before modifying the workflow in the command line?",
        answers: {
            A: "git branch",
            B: "git status",
            C: "git merge",
            D: "git push"
        },
        correctAnswer: "A"
    },
    {
        question: "Which command is executed last in Cascading Style Sheets?",
        answers: {
            A: "Topmost",
            B: "Longest",
            C: "Shortest",
            D: "Bottommost"
        },
        correctAnswer: "D"
    },
    {
        question: "What kind of property is the CSS value 'flex'?",
        answers: {
            A: "Border",
            B: "Grid",
            C: "Display",
            D: "Font"
        },
        correctAnswer: "C"
    },
    {
        question: "What allows better optimization for different screen sizes?",
        answers: {
            A: "Image-rendering",
            B: "Inline display",
            C: "JavaScript",
            D: "Media Queries"
        },
        correctAnswer: "D"
    },
    {
        question: "Which language provides the bones and structure of a website?",
        answers: {
            A: "CSS",
            B: "HTML",
            C: "JavaScript",
            D: "Java"
        },
        correctAnswer: "B"
    },
    {
        question: "How many elements can a class be tied to in HTML?",
        answers: {
            A: "0",
            B: "1",
            C: "2",
            D: "2+"
        },
        correctAnswer: "D"
    },
    {
        question: "What is the best practice way to type in JavaScript?",
        answers: {
            A: "All caps",
            B: "No caps",
            C: "Camel caps",
            D: "Cat caps"
        },
        correctAnswer: "C"
    }
];

// create function to cycle through questions in array
var showNext = function() { 

    // make sure new stem appears with content from array
    var questionTextEl = document.createElement("div");
    questionTextEl.textContent = quizQuestions[0].question;
    questionTextEl.className = "quiz-slides";
    document.getElementById("quiz-stem").appendChild(questionTextEl);

    // create container div to display four option buttons
    var btnContainerEl = document.createElement("div");
    btnContainerEl.className = "quiz-options";
    document.getElementByClassName("quiz-options").appendChild(btnContainerEl);

    // create each button option
    var btnOption1 = document.createElement("button");
    btnOption1.textContent = "hello";
    btnContainerEl.appendChild(btnOption1);

};




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