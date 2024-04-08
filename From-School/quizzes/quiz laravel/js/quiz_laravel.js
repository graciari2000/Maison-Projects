document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.question');
    let currentQuestionIndex = 0;
    const totalQuestions = questions.length;
    let correctCount = 0;
    let timer;

    function displayQuestion(index) {
        questions.forEach((question, i) => {
            if (i === index) {
                question.style.display = 'block';
            } else {
                question.style.display = 'none';
            }
        });
    }

    function startTimer() {
        let timeLeft = 20; // Time in seconds for each question
        const timerDisplay = document.getElementById('timer');
        timerDisplay.textContent = `Temps restant: ${timeLeft} secondes`;

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Temps restant: ${timeLeft} secondes`;

            if (timeLeft === 0) {
                clearInterval(timer);
                goToNextQuestion();
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    function goToNextQuestion() {
        stopTimer();
        currentQuestionIndex++;

        if (currentQuestionIndex < totalQuestions) {
            displayQuestion(currentQuestionIndex);
            startTimer();
        } else {
            showResults();
        }
    }

    function goToPrevQuestion() {
        stopTimer();
        currentQuestionIndex--;

        if (currentQuestionIndex >= 0) {
            displayQuestion(currentQuestionIndex);
        }
    }

    function showResults() {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `Nombre de bonnes réponses: ${correctCount} / ${totalQuestions}`;
    }

    document.getElementById('startBtn').addEventListener('click', function () {
        this.style.display = 'none';
        displayQuestion(currentQuestionIndex);
        startTimer();
    });

    document.querySelectorAll('.question').forEach(question => {
        question.addEventListener('change', function () {
            const selectedOption = this.querySelector('input:checked');
            if (selectedOption && selectedOption.value === 'A') {
                correctCount++;
            }
        });
    });

    document.getElementById('submitBtn').addEventListener('click', function () {
        stopTimer();
        showResults();
    });

    document.getElementById('prevBtn').addEventListener('click', function () {
        goToPrevQuestion();
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
        goToNextQuestion();
    });
});