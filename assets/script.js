// set up high score function

// set up quiz timer. I got the following simple code idea from https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
var timeLeft = 45
var countdownTimer = setInterval(function() {
    if(timeLeft <= 0){
        clearInterval(countdownTimer);
        window.alert("Time is up!");
        return highScore;
    }
    else {
        document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
    }
    timeLeft --;
}, 1000);