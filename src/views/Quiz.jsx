import React, { useState } from 'react';
import styles from './Quiz.module.css';


const questions = [ // Dette er et Array med de forskellige spørgsmål, svarmuligheder og hviklet svar som er rigtigt
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
    const [currentQuestion, setCurrentQuestion] = useState(0); // Hvilket spørgsmål vi er på (0 = første spørgsmål)
    const [score, setScore] = useState(0); // Hvor mange rigtige svar brugeren har
    const [selectedOption, setSelectedOption] = useState(null); // Hvilket svar brugeren har valgt
    const [showResults, setShowResults] = useState(false); // Om resultat-skærmen skal vises

    const handleOptionClick = (index) => {
        setSelectedOption(index); //Her gemmes den valgte mulighed (option)
    };

    const handleNext = () => {
        if (selectedOption === questions[currentQuestion].correct) {
            setScore(score + 1); // Tjekker om svaret er korrekt
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1); // Gå til næste spørgsmål
            setSelectedOption(null); // Nulstil valget
        } else {
            setShowResults(true); // Hvis det var sidste spørgsmål, vis resultater
        }
    };

    const restartQuiz = () => { // Det nulstiller hele quizzen så brugeren kan prøve igen.
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption(null);
        setShowResults(false);
    };

    if (showResults) { // Dette er slutsiden når man har taget quizzen, som også viser hvormange man fik rigtige og så er der knappen, som nustille hele quizzen.
        return ( 
            <div className={styles.results}>
                <h2>Tak fordi du quizzede med!</h2>
                <p>Du fik {score} ud af {questions.length} rigtige svar!</p>
                <p>Hvis du ikke har helt styr på bæredygtigt webdesign så kontakt os, vi kan hjælpe!</p>
                <button className={styles.restartBtn} onClick={restartQuiz}>
                    Tag quizzen igen
                </button>
            </div>
        );
    }

    return (
        <div className={styles.quizContainer}> {/* Wrapperen omkring alt indhold på side */}
            <h1>Velkommen til vores quiz om grønnere tiltag</h1>
            <p>Test din viden om, hvordan du kan reducere dit digitale fodaftryk og skabe en mere bæredygtig online tilstedeværelse. Lad os sammen opdage, hvordan små ændringer kan gøre en stor forskel for miljøet!</p>
            <div className={styles.quizContent}> {/* Wrapperen omkring selve quizzen */}
                <div className={styles.quiz}> 
                    <div className={styles.question}> 
                        <p>{questions[currentQuestion].question}</p> {/* Dette er funktionen som viser det aktuelle spørgersmål */}
                        <div className={styles.options}> 
                            {questions[currentQuestion].options.map((option, index) => ( // Dette er funktionen som viser gør at svarmulighederne passer til det aktuelle spørgsmål
                                <div
                                    key={index}
                                    className={`${styles.option} ${selectedOption === index ? styles.selected : ''}`}
                                    onClick={() => handleOptionClick(index)}>

                                    <span className={styles.dot}></span> {/* Prikkerne til svarmulighederne */}
                                    {option} {/* Svarmulighederne */}
                                </div>
                            ))}
                        </div>
                        <button 
                            className={styles.nextBtn} // Dette er pillen videre i quizzen 
                            onClick={handleNext}
                            disabled={selectedOption === null} // Dette gør at man skal have valgt en af svarmulighederne før man kan gå videre i quizzen
                            > 
                             →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}