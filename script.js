// Questions data (add your questions here)
const questions = [
    { question: "Do you often feel confused about your own thoughts?", id: 1 },
    { question: "Do you question your own memories or perception?", id: 2 },
    { question: "Has someone ever denied something you clearly remember?", id: 3 },
    { question: "Do you find yourself apologizing, even when you’re not at fault?", id: 4 },
    { question: "Do you feel like you’re walking on eggshells around someone?", id: 5 },
    { question: "Do you often doubt your judgment or instincts?", id: 6 },
    { question: "Have you been told you’re 'too sensitive' or 'overreacting'?", id: 7 },
    { question: "Does someone regularly make you feel guilty for things that aren’t your fault?", id: 8 },
    { question: "Do you feel isolated from friends or family because of someone’s actions?", id: 9 },
    { question: "Has your self-esteem decreased in the past few months?", id: 10 },
    { question: "Do you constantly feel unsure of yourself or your actions?", id: 11 },
    { question: "Has someone ever made you feel like you are imagining things?", id: 12 },
    { question: "Do you feel like your emotions are being invalidated?", id: 13 },
    { question: "Are you told you’re 'too dramatic' when you express how you feel?", id: 14 },
    { question: "Do you feel like you’re being manipulated in your relationship?", id: 15 },
    { question: "Have you experienced constant mind games from someone?", id: 16 },
    { question: "Does someone often make you feel like you’re the problem?", id: 17 },
    { question: "Do you find it difficult to trust your own perceptions?", id: 18 },
    { question: "Has someone ever tried to convince you that you’re wrong when you know you’re right?", id: 19 },
    { question: "Do you often feel confused about your feelings or thoughts?", id: 20 },
    { question: "Does someone always make you feel guilty for things out of your control?", id: 21 },
    { question: "Do you feel your opinions are disregarded?", id: 22 },
    { question: "Does someone constantly belittle your achievements?", id: 23 },
    { question: "Do you feel constantly judged by someone in your life?", id: 24 },
    { question: "Do you experience self-doubt after interactions with someone?", id: 25 }
];

// Function to generate question containers dynamically
function generateQuestions() {
    const questionsContainer = document.getElementById('questions');
    questions.forEach((item) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
        
        const questionText = document.createElement('div');
        questionText.classList.add('question');
        questionText.textContent = item.question;
        
        const answerContainer = document.createElement('div');
        answerContainer.classList.add('answer');
        
        const yesLabel = document.createElement('label');
        yesLabel.innerHTML = '<input type="radio" name="question' + item.id + '" value="yes"> Yes';
        
        const noLabel = document.createElement('label');
        noLabel.innerHTML = '<input type="radio" name="question' + item.id + '" value="no"> No';
        
        answerContainer.appendChild(yesLabel);
        answerContainer.appendChild(noLabel);
        
        questionContainer.appendChild(questionText);
        questionContainer.appendChild(answerContainer);
        questionsContainer.appendChild(questionContainer);
    });
}

// Show quiz page and hide intro page
document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('introPage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    generateQuestions();
});

// Handle form submission
document.getElementById('submitBtn').addEventListener('click', function() {
    let score = 0;
    questions.forEach((item) => {
        const answer = document.querySelector(`input[name="question${item.id}"]:checked`);
        if (answer && answer.value === 'yes') {
            score++;
        }
    });

    let resultText = '';
    if (score <= 5) {
        resultText = 'You might not be experiencing gaslighting.';
    } else if (score <= 15) {
        resultText = 'There might be some manipulative behaviors happening.';
    } else {
        resultText = 'You might be experiencing significant gaslighting.';
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = resultText;
    resultElement.style.display = 'block';
});
