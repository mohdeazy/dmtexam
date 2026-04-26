// State Management
let currentExam = 'A';
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let isAnswered = false;
let answeredQuestions = new Set();

// Bubble Generator
function createBubbles() {
    const container = document.getElementById('bubble-container');
    for (let i = 0; i < 20; i++) {
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
    answeredQuestions = new Set();
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
    document.getElementById('progress-bar').style.width = `${(answeredQuestions.size / quiz.length) * 100}%`;

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

    // Prev button state
    const prevBtn = document.getElementById('prev-btn');
    prevBtn.style.opacity = currentQuestionIndex === 0 ? '0.3' : '1';
    prevBtn.style.pointerEvents = currentQuestionIndex === 0 ? 'none' : 'auto';

    // Skip button: always active — at last question it opens modal or results
    document.getElementById('skip-btn').style.opacity = '1';
    document.getElementById('skip-btn').style.pointerEvents = 'auto';

    // If already answered, restore answered state visually
    if (answeredQuestions.has(currentQuestionIndex)) {
        document.getElementById('submit-btn').style.display = 'none';
        document.getElementById('next-btn').style.display = 'block';
    }
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
    answeredQuestions.add(currentQuestionIndex);

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

    // Update progress bar
    document.getElementById('progress-bar').style.width =
        `${(answeredQuestions.size / questions[currentExam].length) * 100}%`;
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function skipQuestion() {
    const quiz = questions[currentExam];
    if (currentQuestionIndex < quiz.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // At the last question — check completion
        const unanswered = getUnansweredList();
        if (unanswered.length === 0) {
            showResults();
        } else {
            showUnansweredModal(unanswered);
        }
    }
}

function nextQuestion() {
    // After answering, go to next unanswered question (wrap around), or results if all done
    const next = findNextUnanswered();
    if (next !== -1) {
        currentQuestionIndex = next;
        loadQuestion();
    } else {
        showResults();
    }
}

// ── Unanswered helpers ────────────────────────────────────────────────────────

function getUnansweredList() {
    const quiz = questions[currentExam];
    const list = [];
    for (let i = 0; i < quiz.length; i++) {
        if (!answeredQuestions.has(i)) list.push(i);
    }
    return list;
}

function findNextUnanswered() {
    const quiz = questions[currentExam];
    // Search from after current to end
    for (let i = currentQuestionIndex + 1; i < quiz.length; i++) {
        if (!answeredQuestions.has(i)) return i;
    }
    // Wrap around from start
    for (let i = 0; i < currentQuestionIndex; i++) {
        if (!answeredQuestions.has(i)) return i;
    }
    return -1; // all answered
}

function showUnansweredModal(unanswered) {
    const modal = document.getElementById('unanswered-modal');
    const grid = document.getElementById('unanswered-grid');
    const msg = document.getElementById('unanswered-msg');

    const count = unanswered.length;
    msg.innerText = `${count} question${count > 1 ? 's' : ''} still need${count === 1 ? 's' : ''} your answer. Tap a number to go there.`;

    grid.innerHTML = '';
    unanswered.forEach(idx => {
        const btn = document.createElement('button');
        btn.className = 'unanswered-btn';
        btn.innerText = idx + 1;
        btn.onclick = () => {
            closeUnansweredModal();
            currentQuestionIndex = idx;
            loadQuestion();
        };
        grid.appendChild(btn);
    });

    modal.classList.add('active');
}

function closeUnansweredModal() {
    document.getElementById('unanswered-modal').classList.remove('active');
}

function showResults() {
    showScreen('result-screen');
    const quiz = questions[currentExam];
    document.getElementById('final-score').innerText = `${score}/${quiz.length}`;

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
