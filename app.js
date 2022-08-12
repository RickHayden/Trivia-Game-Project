//console.log('LINK: START')
// grab elements from html
let questions = document.querySelectorAll('.questions')
let answer = document.querySelectorAll('.answer')
let submit = document.querySelector('.submit')

// make submit button record and respond to answers from radio input
function handleClick() {
    const radioButtons = document.querySelectorAll('input[value= "4"]');
    let selectedValue;
    for (const rb of radioButtons) {
    if (rb.checked) {
    selectedValue = rb.value;
    break;
          }
      }
    if (selectedValue === '4')  {
        alert('Great job! Press the "Next" button to move on to the next branch, climber!');
      }
      else if (selectedValue === '8') {
        alert('Congratulations! you made it to the top of the tree. Press "next" to enjoy the view!');
      }
    else{
        alert("Ahh, you almost had it... Maybe? Oh well. Try again!");
    }
    }
