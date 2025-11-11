import { useEffect, useState } from "react";
import "./App.css";
import { sentences } from "./SentencesV1";
import ReturnAllSentences from "./ReturnAllSentence";
import CatchUsedSentences from "./CatchUsedSentences";
import CheckTypeButtons from "./CheckTypeButtons";

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
    correct: {
      number: 0,
      answers: [],
    },
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
      return;
    }

    const newSentence =
      copySentences[Math.floor(Math.random() * copySentences.length)];

    const newIDis = newSentence.info.id;

    setCurrentSentence({
      sentence: newSentence.info.sentence,
      id: newIDis,
      condition: newSentence.condition.if,
      type: newSentence.info.type,
    });
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

  return (
    <div className="container">
      <h2>Conditional Sentences V2</h2>
      <div>
        <ReturnAllSentences
          sentences={originalSentences}
          count={originalSentences.length}
        />

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
        <CatchUsedSentences
          sentences={usedSentences}
          count={usedSentences.length}
        />
        {/* <p>Sentences generated: {count}</p> */}
        {/* <p>Sentence ID: {currentSentence.id} </p> */}
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
          {currentSentence.type !== undefined ? (
            <>
              {" "}
              Conditional Type:{" "}
              <span>
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
              Type of Conditional: This is{" "}
              <strong>{convertType(currentSentence.type)}</strong> conditional{" "}
            </>
          )}
        </p>

        <p>{recordScore.score}</p>
        <p>{playerAnswered ? "Answered: True" : "Answered: False"}</p>
      </div>
    </div>
  );
}
