var startQuiz = true;

var quizQuestions = [
    {  
       question: "What serves as a collection of random pieces of related information?",
       answers: {
           text: "Argument",
           text: "Method",
           text: "Array",
           text: "Function"
       },
       correctAnswer: "C"
    },
    {
        question: "What symbol denotes an id class selector in CSS?",
        answers: {
            text: "@",
            text: "#",
            text: ".",
            text: "$"
        },
        correctAnswer: "B"
    },
    {
        question: "What command is a best practice before modifying the workflow in the command line?",
        answers: {
            text: "git branch",
            text: "git status",
            text: "git merge",
            text: "git push"
        },
        correctAnswer: "A"
    },
    {
        question: "Which command is executed last in Cascading Style Sheets?",
        answers: {
            text: "Topmost",
            text: "Longest",
            text: "Shortest",
            text: "Bottommost"
        },
        correctAnswer: "D"
    },
    {
        question: "What kind of property is the CSS value 'flex'?",
        answers: {
            text: "Border",
            text: "Grid",
            text: "Display",
            text: "Font"
        },
        correctAnswer: "C"
    },
    {
        question: "What allows better optimization for different screen sizes?",
        answers: {
            text: "Image-rendering",
            text: "Inline display",
            text: "JavaScript",
            text: "Media Queries"
        },
        correctAnswer: "D"
    },
    {
        question: "Which language provides the bones and structure of a website?",
        answers: {
            text: "CSS",
            text: "HTML",
            text: "JavaScript",
            text: "Java"
        },
        correctAnswer: "B"
    },
    {
        question: "How many elements can a class be tied to in HTML?",
        answers: {
            text: "0",
            text: "1",
            text: "2",
            text: "2+"
        },
        correctAnswer: "D"
    },
    {
        question: "What is the best practice way to type in JavaScript?",
        answers: {
            text: "All caps",
            text: "No caps",
            text: "Camel caps",
            text: "Cat caps"
        },
        correctAnswer: "C"
    }
];

// loop through the array to display questions
for (let i = 0; i < array.length; i++) {
    // prepare the stem element and display text
    var questionTextEl = document.createElement("div");
    questionTextEl.className = "quiz-content";
    questionTextEl.textContent = quizQuestions.question;
    quiz-stem.appendChild(questionTextEl);

}





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