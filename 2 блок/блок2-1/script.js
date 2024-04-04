// Питання тесту про свічки
const questions = [
    {
        question: "Який аромат свічок є найпопулярнішим?",
        answers: ["Ваніль", "Лаванда", "Сандал", "Кориця"],
        correctAnswer: "Ваніль"
    },
    {
        question: "Яка форма свічки часто використовується на Різдво?",
        answers: ["Кругла", "Зірка", "Ялинка", "Серце"],
        correctAnswer: "Ялинка"
    },
    {
        question: "З якого матеріалу в основному виготовляються свічки?",
        answers: ["Бджолиний віск", "Соєвий віск", "Парафін", "Пальмовий віск"],
        correctAnswer: "Соєвий віск"
    },
    {
        question: "Яка ціль підвішування свічки?",
        answers: ["Утримувати свічку разом", "Поглинати віск", "Надавати аромат", "Запалювати плам'я"],
        correctAnswer: "Запалювати плам'я"
    },
    {
        question: "Який колір свічки часто асоціюється з релаксацією?",
        answers: ["Червоний", "Синій", "Зелений", "Жовтий"],
        correctAnswer: "Синій"
    }
];

// DOM-елементи
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submitBtn');

// Відображення питань тесту
function displayQuiz(questions) {
    questions.forEach((question, index) => {
        const answers = question.answers.map(answer => `<label><input type="radio" name="question${index}" value="${answer}">${answer}</label>`).join('');
        quizContainer.innerHTML += `<div class="question">${question.question}</div><div class="answers">${answers}</div>`;
    });
}

// Перевірка відповідей та відображення результатів
function showResult() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;

    questions.forEach((question, index) => {
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainers[index].querySelector(selector) || {}).value;

        if (userAnswer === question.correctAnswer) {
            score++;
            answerContainers[index].style.color = 'green'; // Змінюємо колір тексту на зелений
        } else {
            answerContainers[index].style.color = 'red';
        }
    });

    resultContainer.textContent = `Ваш результат: ${score} з ${questions.length}`;
}

// Відображення тесту при завантаженні сторінки
displayQuiz(questions);

// Обробник події для кнопки "Підтвердити"
submitButton.addEventListener('click', showResult);
