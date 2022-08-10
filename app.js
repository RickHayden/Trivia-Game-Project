console.log('LINK: START')
// let gameActive = true;
let questions = document.querySelectorAll('.questions')
// let answerA = document.querySelector('.AnswerA')
// let answerB = document.querySelector('.AnswerB')
// let answerC = document.querySelector('.AnswerC')
// let answerD = document.querySelector('.AnswerD')
let startButton = document.querySelector('#startButton')
console.log(questions)

// hide questions until game starts
questions[0].style.visibility = 'hidden'
questions[1].style.visibility = 'hidden'
questions[2].style.visibility = 'hidden'
questions[3].style.visibility = 'hidden'
questions[4].style.visibility = 'hidden'


// Have start button show questions
startButton.addEventListener('click', function (event){
    questions[0].style.visibility = 'block';
    questions[1].style.visibility = 'block';
    questions[2].style.visibility = 'block';
    questions[3].style.visibility = 'block';
    questions[4].style.visibility = 'block';
})

// Configure Timer along with same start button as game
// const timer = document.getElementById('timer');
// let timerInterval


// startTimer = () => {
//     // Firs twe start by clearing the existing timer, in case of a restart
//     clearInterval(timerInterval);
//     // Then we clear the variables
//     let second = 0,
//       minute = 0,
//       hour = 0;
  
//     // Next we set a interval every 1000 ms
//     timerInterval = setInterval(function () {
  
//       // We set the timer text to include a two digit representation
//       timer.innerHTML =
//         (hour ? hour + ':' : '') +
//         (minute < 10 ? '0' + minute : minute) +
//         ':' +
//         (second < 10 ? '0' + second : second);
  
//       // Next, we add a new second since one second is passed
//       second++;
  
//       // We check if the second equals 60 "one minute"
//       if (second == 60) {
//         // If so, we add a minute and reset our seconds to 0
//         minute++;
//         second = 0;
//       }
  
//       // If we hit 60 minutes "one hour" we reset the minutes and plus an hour
//       if (minute === 03) {
//         stop(timer);
//         alert('Time\'s up! Let\'s tally your score!');
//       }
//     }, 1000);
//   };