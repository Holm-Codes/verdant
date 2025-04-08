export default function Quiz(){
    return (
        <div>Quiz</div>
    )
}

import React, { useState } from 'react';
import styles from './Quiz.module.css';

const questions = [
    // Indsæt dine spørgsmål her (samme struktur som i den oprindelige kode)
    {
        question: "Hvilken hostingløsning er mest bæredygtig?",
        options: ["Grøn hosting", "Almindelig cloud-hosting", "Lokale servere uden miljøcertificering"],
        correct: 0
    },
    {
        question: "Hvad er det mest energieffektive billedformat til hjemmesider?",
        options: ["PNG", "WEBP", "JPEG"],
        correct: 1
    },
    {
        question: "Hvordan reducerer du energiforbrug på din hjemmeside?",
        options: ["MobileFirst-design", "Autoplay-videoer", "Uoptimeret JavaScript"],
        correct: 0
    },
    {
        question: "Hvilken farve bruger mest energi på skærme?",
        options: ["Grøn", "Rød", "Blå"],
        correct: 2
    },
    {
        question: "Hvad er en vigtig SEO-faktor, der også gavner bæredygtighed?",
        options: ["Mange pop-up-vinduer", "Hurtig indlæsningstid", "Ukomprimeret video"],
        correct: 1
    },
    {
        question: "Hvilken funktion kan mindske unødvendig trafik?",
        options: ["Generiske annoncer", "Ufiltreret e-mail-marketing", "Målrettede kampagner"],
        correct: 2
    },
    {
        question: "Hvorfor er dark mode ikke altid den mest bæredygtige løsning?",
        options: ["Det kræver ekstra kodning", "Størstedelen af trafikken kommer fra lyse skærme", "Det øger energiforbruget"],
        correct: 1
    },
    {
        question: "Hvad er en fordel ved at bruge Font Awesome-ikoner?",
        options: ["Mindre databelastning end billeder", "Flere farvepaletter", "Bedre animationer"],
        correct: 0
    },
    {
        question: "Hvordan påvirker videoer bæredygtigheden?",
        options: ["4K-videoer er altid optimale", "Korte videoer har ingen effekt", "Autoplay-videoer øger energiforbrug"],
        correct: 2
    },
    {
        question: "Hvad er et eksempel på bæredygtig kode?",
        options: ["Ren, optimeret kode", "Mange tredjeparts-plugins", "Ustrukturerede CSS-filer"],
        correct: 0
    },
];

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResults, setShowResults] = useState(false);

    const handleOptionClick = (index) => {
        setSelectedOption(index);
    };

    const handleNext = () => {
        if (selectedOption === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setShowResults(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption(null);
        setShowResults(false);
    };

    if (showResults) {
        return (
            <div className={styles.results}>
                <h2>Tak fordi du quizzede med!</h2>
                <p>Du fik {score} ud af {questions.length} rigtige svar!</p>
                <button className={styles.restartBtn} onClick={restartQuiz}>
                    Tag quizzen igen
                </button>
            </div>
        );
    }

    return (
        <div className={styles.quizContainer}>
            <h1>Velkommen til vores bæredygtighedsquiz</h1>
            <p>Test din viden om, hvordan du kan reducere dit digitale fodaftryk og skabe en mere bæredygtig online tilstedeværelse. Lad os sammen opdage, hvordan små ændringer kan gøre en stor forskel for miljøet!</p>
            <div className={styles.quizContent}>
                <div className={styles.astronaut}>
                    <img src="/images/Quiz-spaceman.webp" alt="Astronaut" />
                </div>
                <div className={styles.quiz}>
                    <div className={styles.question}>
                        <p>{questions[currentQuestion].question}</p>
                        <div className={styles.options}>
                            {questions[currentQuestion].options.map((option, index) => (
                                <div
                                    key={index}
                                    className={`${styles.option} ${selectedOption === index ? styles.selected : ''}`}
                                    onClick={() => handleOptionClick(index)}
                                >
                                    <span className={styles.dot}></span>
                                    {option}
                                </div>
                            ))}
                        </div>
                        <button 
                            className={styles.nextBtn} 
                            onClick={handleNext}
                            disabled={selectedOption === null}
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
