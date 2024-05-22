import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const questions = [
    { question: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], correct: 0, category: "HTML" },
    { question: "Which property is used to change the background color?", answers: ["color", "background-color", "bgcolor"], correct: 1, category: "CSS" },
    // Add more questions for JavaScript, React, MongoDB, SQL, Laravel, PHP
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (index) => {
        setAnswers([...answers, index]);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    const getResults = () => {
        const results = {
            HTML: 0,
            CSS: 0,
            JavaScript: 0,
            React: 0,
            MongoDB: 0,
            SQL: 0,
            Laravel: 0,
            PHP: 0
        };
        questions.forEach((q, index) => {
            if (answers[index] === q.correct) {
                results[q.category]++;
            }
        });
        return results;
    };

    const results = getResults();
    const data = {
        labels: Object.keys(results),
        datasets: [{
            data: Object.values(results),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF5733',
                '#C70039',
                '#900C3F',
                '#581845',
                '#DAF7A6'
            ],
        }]
    };

    return (
        <div>
            {!showResults ? (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].answers.map((answer, index) => (
                        <button key={index} onClick={() => handleAnswer(index)}>
                            {answer}
                        </button>
                    ))}
                </div>
            ) : (
                <div>
                    <h2>Quiz Results</h2>
                    <Pie data={data} />
                </div>
            )}
        </div>
    );
};

export default Quiz;