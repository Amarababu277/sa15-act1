const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      question: "How many planets are in our solar system?",
      answers: ["7", "8", "9"],
      correctAnswer: "8"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const question = document.getElementById('question');
  const answers = document.getElementById('answers');
  const nextBtn = document.getElementById('nextBtn');
  const feedback = document.getElementById('feedback');
  
  function displayQuestion() {
    question.textContent = questions[currentQuestion].question;
    answers.innerHTML = '';
    questions[currentQuestion].answers.forEach(answer => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.addEventListener('click', checkAnswer);
      answers.appendChild(button);
    });
  }
  
  function checkAnswer(e) {
    if (e.target.textContent === questions[currentQuestion].correctAnswer) {
      feedback.textContent = 'Correct!';
      score++;
    } else {
      feedback.textContent = 'Incorrect!';
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
      feedback.textContent = '';
    } else {
      question.textContent = `Quiz Complete. Your score is ${score}/${questions.length}`;
      answers.innerHTML = '';
      nextBtn.disabled = true;
    }
  }
  
  nextBtn.addEventListener('click', nextQuestion);
  
  displayQuestion();