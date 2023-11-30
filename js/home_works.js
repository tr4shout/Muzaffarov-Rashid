function checkEmail() {
    let input = document.getElementById('gmail_input');
    let resultSpan = document.getElementById('gmail_result');
    let regex = /@gmail\.com$/;
  
    if (regex.test(input.value)) {
      resultSpan.textContent = 'Email введен правильно';
    } else {
      resultSpan.textContent = 'Email введен неправильно';
    }
  }

//   function moveElement() {
//     const childBlock = document.getElementById('animatedBlock');
//     let top = 50;
//     let left = 50;
//     let direction = 'right'; 

//     setInterval(() => {
//         const parentBlock = document.querySelector('.parent_block');
//         const parentWidth = parentBlock.offsetWidth;
//         const parentHeight = parentBlock.offsetHeight;
//         const childWidth = childBlock.offsetWidth;
//         const childHeight = childBlock.offsetHeight;

//         if (direction === 'right') {
//             if (left + childWidth >= parentWidth) {
//                 direction = 'down';
//             } else {
//                 left += 5;
//             }
//         } else if (direction === 'down') {
//             if (top + childHeight >= parentHeight) {
//                 direction = 'left';
//             } else {
//                 top += 5;
//             }
//         } else if (direction === 'left') {
//             if (left <= 0) {
//                 direction = 'up';
//             } else {
//                 left -= 5;
//             }
//         } else if (direction === 'up') {
//             if (top <= 0) {
//                 direction = 'right';
//             } else {
//                 top -= 5;
//             }
//         }

//         childBlock.style.top = top + 'px';
//         childBlock.style.left = left + 'px';
//     }, 30); 
// }

// moveElement();

function moveElement() {
    const childBlock = document.getElementById('animatedBlock');
    const parentBlock = document.querySelector('.parent_block');
    const parentWidth = parentBlock.offsetWidth;
    const parentHeight = parentBlock.offsetHeight;
    const childWidth = childBlock.offsetWidth;
    const childHeight = childBlock.offsetHeight;

    let top = (parentHeight - childHeight) / 2; 
    let left = (parentWidth - childWidth) / 2; 
    let moveRight = true; 

    const moveInterval = setInterval(() => {
        if (moveRight) {
            if (left + childWidth >= parentWidth) {
                moveRight = false;
            } else {
                left += 5;
            }
        } else {
            if (top + childHeight >= parentHeight) {
                clearInterval(moveInterval); 
            } else {
                top += 5;
            }
        }

        childBlock.style.top = top + 'px';
        childBlock.style.left = left + 'px';
    }, 30);
}

moveElement();

let timerInterval;
let timerRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
  if (!timerRunning) {
    timerInterval = setInterval(incrementTimer, 10);
    timerRunning = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.getElementById('minutesS').innerText = formatTime(minutes);
  document.getElementById('secondsS').innerText = formatTime(seconds);
  document.getElementById('ml-secondsS').innerText = formatTime(milliseconds);
}

function incrementTimer() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      document.getElementById('minutesS').innerText = formatTime(minutes);
    }
    document.getElementById('secondsS').innerText = formatTime(seconds);
  }
  document.getElementById('ml-secondsS').innerText = formatTime(milliseconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);




  