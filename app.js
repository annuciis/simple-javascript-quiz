const correctAnswers = ['A', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault(); //not to refresh the page, when clicking submit
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  let notValidAnswers = 0;


  for(let i = 0 ; i < userAnswers.length; i++){
      
      if(correctAnswers[i] == userAnswers[i]){
          score+= 25;
          
      }

      if(userAnswers[i] == ""){
          notValidAnswers++;
      }

     
  }

  if(notValidAnswers == 0){
    scrollTo(0,0);
    result.classList.remove('d-none');
    let i = 0;
    const timer = setInterval(() => {
        if(i <= score){
            result.querySelector('span').innerText = i + "%";
            i++;
        }
    }, 5)
    if(i == score){
        clearInterval(timer)
    }

  } else {
    alert("You can't get the score without answering to all questions");
    notValidAnswers = 0;
  }

})