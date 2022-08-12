// grab elements from html
let questions = document.querySelectorAll('.questions')
let answer = document.querySelectorAll('.answer')
let submit = document.querySelector('.submit')

// make submit button recognize and respond to answers from radio input
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
    else {
        alert("Ah, you almost had it... Oh well. Try again!");
    }
    }