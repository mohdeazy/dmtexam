// State Management
let currentExam = 'A';
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let isAnswered = false;

// Bubble Generator
function createBubbles() {
    const container = document.getElementById('bubble-container');
    const bubbleCount = 20;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 60 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        bubble.style.setProperty('--duration', Math.random() * 10 + 10 + 's');
        
        container.appendChild(bubble);
    }
}

// Navigation Logic
function startExam(type) {
    currentExam = type;
    currentQuestionIndex = 0;
    score = 0;
    showScreen('quiz-screen');
    loadQuestion();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function loadQuestion() {
    isAnswered = false;
    selectedOption = null;
    
    const quiz = questions[currentExam];
    const qData = quiz[currentQuestionIndex];
    
    // Update Header
    document.getElementById('question-counter').innerText = `Question ${currentQuestionIndex + 1}/${quiz.length}`;
    document.getElementById('current-score').innerText = `Score: ${score}`;
    document.getElementById('progress-bar').style.width = `${((currentQuestionIndex) / quiz.length) * 100}%`;
    
    // Update Question
    document.getElementById('question-text').innerText = qData.q;
    
    // Update Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    qData.options.forEach((opt, index) => {
        const optEl = document.createElement('div');
        optEl.className = 'option';
        optEl.innerHTML = `
            <span class="option-letter">${String.fromCharCode(97 + index)}</span>
            <span class="option-text">${opt}</span>
        `;
        optEl.onclick = () => selectOption(index, optEl);
        optionsContainer.appendChild(optEl);
    });
    
    // Reset Feedback
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
}

function selectOption(index, element) {
    if (isAnswered) return;
    
    selectedOption = index;
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
}

function submitAnswer() {
    if (selectedOption === null) {
        alert("Please take a breath and select an answer first! 🧘‍♂️");
        return;
    }
    
    isAnswered = true;
    const qData = questions[currentExam][currentQuestionIndex];
    const feedbackEl = document.getElementById('feedback');
    const isCorrect = selectedOption === qData.answer;
    
    if (isCorrect) {
        score++;
        feedbackEl.className = 'feedback correct';
        document.getElementById('feedback-title').innerText = 'Nice Dive! 🤿';
    } else {
        feedbackEl.className = 'feedback wrong';
        document.getElementById('feedback-title').innerText = 'Watch Your Depth! ⚠️';
    }
    
    document.getElementById('feedback-text').innerText = qData.feedback;
    document.getElementById('correct-answer-reveal').innerText = isCorrect ? '' : `Correct Answer: ${qData.options[qData.answer]}`;
    feedbackEl.style.display = 'block';
    
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    const quiz = questions[currentExam];
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quiz.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    showScreen('result-screen');
    const quiz = questions[currentExam];
    const finalScoreEl = document.getElementById('final-score');
    finalScoreEl.innerText = `${score}/${quiz.length}`;
    
    const commentEl = document.getElementById('score-comment');
    const percentage = (score / quiz.length) * 100;
    
    if (percentage >= 90) {
        commentEl.innerText = "Master Level! You're ready to lead the pack! 🦈";
    } else if (percentage >= 75) {
        commentEl.innerText = "Great job! A few more dives and you'll be perfect. 🐠";
    } else {
        commentEl.innerText = "Keep practicing! Every expert was once a beginner. 🐚";
    }
}

function resetApp() {
    showScreen('home-screen');
}

// Initialize
createBubbles();
