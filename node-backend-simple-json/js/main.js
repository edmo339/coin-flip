

document.querySelector('#clickMe').addEventListener('click', coinFlip)

function coinFlip () {
  const userChoice = document.querySelector("#headsortails").value;
  let flipResult = Math.ceil(Math.random() * 2) == 1 ? 'heads' : 'tails'
  let winOrLose
  if (userChoice == flipResult) {
     winOrLose = 'You Win!'
  } else{
     winOrLose = 'You Lose!'
  }
  

  document.querySelector("#flipRes").textContent = flipResult
  document.querySelector("#winOrLose").innerHTML = winOrLose
  document.querySelector("#yourChoice").innerHTML = userChoice
}
