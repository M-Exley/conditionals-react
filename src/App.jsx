import { useEffect, useState } from "react";
import "./App.css";
import { sentences } from "./SentencesV1";
import CatchIncorrectAnswers from "./CatchIncorrectAnswers";
import CheckTypeButtons from "./CheckTypeButtons";
import Modal from "./modal";
// import CatchIncorrectSentences from "./CatchIncorrectAnswers";

export default function App() {
  const [originalSentences, setOriginalSentences] = useState(sentences);
  const [usedSentences, setUsedSentences] = useState([]);
  const [currentSentence, setCurrentSentence] = useState({
    sentence: "",
    condition: "",
    result: "",
    id: 0,
    type: undefined,
    hint: false,
  });
  const [playerAnswered, setPlayerAnswered] = useState(false);
  const [count, setCount] = useState(0);
  const [buttonSelected, setButtonSelected] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(undefined);
  const [recordScore, setRecordScore] = useState({
    score: 0,
    finished: false,

    incorrect: {
      number: 0,
      answers: [],
    },
  });

  useEffect(() => {
    if (playerAnswered === true) {
      setPlayerAnswered(true);
    }
  }, [playerAnswered]);

  useEffect(() => {
    if (!usedSentences) return;
    // console.log("Used sentences", usedSentences);
  }, [usedSentences]);

  useEffect(() => {
    if (!buttonSelected) {
      return;
    }
    // console.log("button pressed:", buttonSelected);
    console.log("Sentence Type", currentSentence.type);
  }, [buttonSelected]);

  useEffect(() => {
    if (!buttonSelected) return;
    //currentSentence.type convert to word
    const convert = convertType(currentSentence.type);
    console.log("convert", convert);
    console.log("button changed to:", buttonSelected);

    // buttonSelected convert to lowerCase

    if (buttonSelected.toLowerCase() === convert) {
      setCorrectAnswer(true);
      setPlayerAnswered(true);
      setRecordScore((prev) => ({
        ...prev,
        score: prev.score + 1,
      }));
      setPlayerAnswered(true);
      console.log(correctAnswer);
      return;
    } else {
      setPlayerAnswered(true);
      setCorrectAnswer(false);
      setRecordScore((prev) => ({
        ...prev,
        incorrect: {
          number: prev.incorrect.number + 1,
          answers: [...prev.incorrect.answers, currentSentence.sentence], // append new answer
        },
      }));
      console.log(correctAnswer);
      return;
    }
  }, [buttonSelected]);

  const getSentenceFromArray = () => {
    setPlayerAnswered(false);
    setCorrectAnswer(undefined);
    setButtonSelected("");
    setCurrentSentence((prev) => ({
      ...prev,
      hint: false,
    }));

    let copySentences = [...originalSentences]; // not necessary when using filter/map. Only sort or change
    // console.log(copySentences);

    if (!currentSentence) return;

    if (copySentences.length === 0) {
      alert("All completed");
      setRecordScore((prev) => ({
        ...prev,
        finished: true,
      }));
      return;
    }

    const newSentence =
      copySentences[Math.floor(Math.random() * copySentences.length)];

    const newIDis = newSentence.info.id;

    setTimeout(() => {
      setCurrentSentence({
        sentence: newSentence.info.sentence,
        id: newIDis,
        condition: newSentence.condition.if,
        type: newSentence.info.type,
      });
    }, 250);

    setUsedSentences((prev) => [...prev, newSentence]);
    setOriginalSentences((prev) =>
      prev.filter((sentence) => sentence.info.id !== newIDis)
    );

    setCount((prevCount) => prevCount + 1);
  };

  const convertType = (objectKey) => {
    const types = {
      0: "zero", // problem with zero + undefined. RESOLVED
      1: "first",
      2: "second",
      3: "third",
      4: "mixed",
    };

    if (objectKey === 0) return "zero";
    if (objectKey === undefined || objectKey === null) return "unknown";

    return types[objectKey];
  };

  const handleHint = () => {
    console.log("Hint requested");
    setCurrentSentence((prev) => ({
      ...prev,
      hint: true,
    }));
  };

  if (!recordScore.finished) {
    return (
      <div className="container">
        <h2>Conditional Sentences V2</h2>
        <div>
          <p>
            Sentence: <strong>{currentSentence.sentence} </strong>
          </p>

          <div className="buttonsAction">
            <button onClick={getSentenceFromArray}>
              {count === 0 ? "Get Sentence" : "Next Sentence"}
            </button>

            {!playerAnswered && (
              <CheckTypeButtons
                onSelect={setButtonSelected} // what is this doing?
              />
            )}
          </div>
          {/* {copySentences.length === 0 && (
          <CatchUsedSentences
            sentences={usedSentences}
            count={usedSentences.length}
          />
        )} */}

          <p>
            {currentSentence.sentence && (
              <>
                {correctAnswer === undefined ? (
                  "Question Not attempted"
                ) : correctAnswer ? (
                  <>
                    <strong style={{ color: "green" }}>Correct</strong>: this is{" "}
                    {convertType(currentSentence.type)} conditional.
                  </>
                ) : (
                  <>
                    <strong style={{ color: "red" }}>Incorrect</strong>: this is{" "}
                    {convertType(currentSentence.type)} conditional.
                  </>
                )}
              </>
            )}
          </p>
          <p>
            {currentSentence.type !== undefined && !playerAnswered ? (
              <>
                {" "}
                Conditional Trigger:{" "}
                <span title="This is the phrase that causes the conditional">
                  {!currentSentence.hint ? (
                    <button onClick={handleHint} className="span-button">
                      Get Hint
                    </button>
                  ) : (
                    <>
                      <strong style={{ textDecoration: "underline" }}>
                        {currentSentence.condition}
                      </strong>
                    </>
                  )}
                </span>
              </>
            ) : (
              <>
                {" "}
                Type of Conditional: This is{" "}
                <strong>
                  {convertType(currentSentence.type)}
                </strong> conditional{" "}
              </>
            )}
          </p>

          <p>Score: {recordScore.score}</p>
          <p>{playerAnswered ? "Answered: True" : "Answered: False"}</p>
          <Modal />
        </div>
      </div>
    );
  } else {
    return (
      <div className="finish-overlay">
        <h1>FINISHED</h1>
        <div className="result">
          <p>Here are the questions which you got incorrect</p>
          <CatchIncorrectAnswers sentences={recordScore.incorrect.answers} />
        </div>
      </div>
    );
  }
}
