const questions = [
    "I often second-guess myself, even when I'm sure about something.",
    "I feel guilty for things that aren’t my fault.",
    "I apologize frequently, even when I haven’t done anything wrong.",
    "I find myself doubting my memories after someone contradicts them.",
    "I feel like I need to prove my feelings are valid.",
    "I stay in relationships where I feel manipulated or controlled.",
    "I often feel like I’m overreacting when expressing emotions.",
    "I struggle to trust my own judgment.",
    "I let others define what is real and what is not.",
    "I often feel confused about what actually happened in past situations.",
    "I change my opinions to avoid conflict.",
    "I feel responsible for fixing other people's problems or emotions.",
    "I feel isolated from friends or family because of a relationship.",
    "I hesitate to speak up because I don’t want to be seen as 'crazy' or 'too sensitive'.",
    "I feel like I must constantly explain myself to others.",
    "I have been told that I misremember events, even when I am sure I’m right.",
    "I feel like I can’t trust my own feelings because they might be irrational.",
    "I rely on others to tell me if I’m overreacting or being reasonable.",
    "I feel drained and anxious in certain relationships but don’t know why.",
    "I struggle to set boundaries because I fear upsetting others.",
    "I question whether my emotions are valid or justified.",
    "I avoid sharing my thoughts because I don’t want to be judged as ‘wrong’.",
    "I feel powerless to change situations where I feel manipulated.",
    "I feel like I'm walking on eggshells around certain people.",
    "I blame myself when someone else gets angry with me."
];

let currentQuestion = 0;
let scores = [];

const questionText = document.getElementById("question-text");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    if (currentQuestion < questions.length) {
        questionText.textContent = questions[currentQuestion];
    } else {
        showResults();
    }
}

options.forEach(button => {
    button.addEventListener("click", () => {
        scores.push(parseInt(button.getAttribute("data-value")));
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            nextButton.style.display = "block";
        }
    });
});

nextButton.addEventListener("click", showResults);

function showResults() {
    const totalScore = scores.reduce((acc, val) => acc + val, 0);
    const maxScore = questions.length * 4;
    const percentage = (totalScore / maxScore) * 100;
    
    let resultMessage = "";

    if (percentage >= 80) {
        resultMessage = "⚠️ High Risk: You may be highly susceptible to gaslighting. Consider seeking support and reinforcing self-trust.";
    } else if (percentage >= 60) {
        resultMessage = "🟠 Moderate Risk: You may sometimes experience gaslighting. Strengthening boundaries and self-validation could help.";
    } else if (percentage >= 40) {
        resultMessage = "🟡 Mild Risk: You have a moderate level of self-trust but could still be influenced in certain situations.";
    } else if (percentage >= 20) {
        resultMessage = "🟢 Low Risk: You generally trust yourself and recognize manipulation tactics.";
    } else {
        resultMessage = "✅ Very Low Risk: You are highly aware of gaslighting tactics and unlikely to fall for manipulation.";
    }

    resultContainer.innerHTML = `<p>Your Score: ${percentage.toFixed(1)}%</p><p>${resultMessage}</p>`;
}

loadQuestion();
