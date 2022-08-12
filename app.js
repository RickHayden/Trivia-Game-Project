//console.log('LINK: START')
// grab elements from html
let gameActive = true;
let questions = document.querySelectorAll('.questions')
let startButton = document.querySelector('#startButton')
let answer = document.querySelectorAll('.answer')
let nextButton = document.querySelector('.next')
let part2 = document.querySelectorAll(".questions2")







// questions[0].style.visibility = 'hidden';
// questions[1].style.visibility = 'hidden';
// questions[2].style.visibility = 'hidden';
// questions[3].style.visibility = 'hidden';
// questions[4].style.visibility = 'hidden';



startButton.addEventListener('click', function(evt) {
    questions.forEach(function(e) {
        questions.style.display = 'block'
    })
    gameActive = true;
})






// Have start button reveal questions
// startButton.addEventListener('click', function () {
//         let questions = document.getElementsByClassName(".questions")
//         if (questions.style.visibility === "block") {
//             questions.style.visibility === "hidden"
//         }
//         else {
//             questions.style.visibility = "block"
//         }
//     })







































// Configure Timer along with game start button

















