import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Correction ici : le nom de l'icône a été modifié de faXmark à faTimes
import Question from "./Question.json";

const Modals = (props) => {
  const [finished, setFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalCO2, setTotalCO2] = useState(0);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allquestions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.questions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Correction ici : ajout des crochets vides pour exécuter l'effet uniquement une fois lors du montage

  function newAnswer(co2) {
    setTotalCO2(totalCO2 + co2);

    if (currentQuestionIndex >= 5) {
      // Correction ici : l'index commence à 0, donc le dernier index est 5
      setFinished(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  }
  console.log(questions);
  return (
    <Modal
      isOpen={props.showModal}
      onRequestClose={() => props.closeModal(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "50%",
          height: "50%",
          margin: "auto",
        },
      }}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <button className={styles.button} onClick={() => props.closeModal(false)}>
        <FontAwesomeIcon icon={faTimes} />{" "}
        {/* Correction ici : Utilisation de faTimes */}
      </button>

      {finished ? (
        <div className="flex w-full h-full flex-col bg-[#41f67f]">
          <div className="w-full h-full  flex ">
            <div className="w-full text-center text-[2vw] h-full flex items-center justify-center ">
              Bravo vous êtes dans la moyenne!
            </div>
            <div className="w-full text-[2vw] text-center flex-col flex items-center justify-center  h-full">
              {" "}
              Votre score total: <p className="font-bold">
                {totalCO2 / 6}
              </p>{" "}
              {/* Correction ici : Utilisation de la division par 6 pour obtenir la moyenne */}
            </div>
          </div>
          <div className="w-full h-full  gap-5 flex flex-col items-center justify-center ">
            <p className="text-[2vw] font-bold">
              {" "}
              Télécharger notre application mobile
            </p>
            <img
              className="size-20 font-bold text-[2vw]"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Qrcode_wikipedia_fr_v2clean.png"
            />
          </div>
        </div>
      ) : (
        <div className={styles.parents2}>
          <h2 className={styles.h23}>Quizz EcoTrack</h2>
          <h2 className={styles.class1}>{props.showModal}</h2>
          <p className={styles.class2}> 
            {questions.length && questions[currentQuestionIndex].question}
          </p>
          <div className={styles.answers}>
            {questions.length &&
              questions[currentQuestionIndex].answers.map((answer, index) => (
                <p
                  className={styles.answer}
                  key={index}
                  onClick={() => newAnswer(answer.CO2)}
                >
                  {answer.content} 
                </p>
              ))}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Modals;
