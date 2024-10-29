import {quizData} from './data.js';
console.log(quizData);

let container = document.getElementById('quiz-container');
let level = 0;
let points = 0;

displayQuestion()


function displayQuestion(){
    if(level < quizData.length){
        container.innerHTML = `
        <h2 style="margin:4px">${quizData[level].question}</h2>
      <div class="option-container">  
      <div class="option"><input type="radio" name="option" id="a">${quizData[level].a}</input></div>
         <div class="option"><input type="radio" name="option" id="b">${quizData[level].b}</input></div>
         <div class="option"><input type="radio" name="option" id="c">${quizData[level].c}</input></div>
         <div class="option"><input type="radio" name="option" id="d">${quizData[level].d}</input></div>
        <button class="button">SUBMIT</button></div>
        `
    } 
    else{
        container.innerHTML = `<h2>QUIZ COMPLETE! YOU GOT ${points} CORRECT 🎉</h2>`
    }   
    document.querySelector('.button').addEventListener('click', ()=> submitHandler())
}

function submitHandler(){
    let selectedOption = '';
    const options = document.querySelectorAll('input[name="option"]');
    options.forEach((option) => {
        if(option.checked){
            selectedOption = option.id;
            console.log(selectedOption)
        }

    })
    if(selectedOption){
        if(selectedOption === quizData[level].correct){
            points++;
        }
        level++;
        displayQuestion();
    }
    else{
        alert('No option selected')
    }
}