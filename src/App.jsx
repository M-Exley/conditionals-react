import { useEffect, useState } from "react";
import "./App.css";
import { sentences } from "./SentencesV1";
import CatchIncorrectAnswers from "./CatchIncorrectAnswers";
import CheckTypeButtons from "./CheckTypeButtons";
import Modal from "./modal";

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
  const [recordGame, setRecordGame] = useState({
    score: 0,
    begun: false,
    finished: false,

    incorrect: {
      number: 0,
      answers: [],
    },
  });

  useEffect(() => {
    if (!usedSentences) return;
  }, [usedSentences]);

  useEffect(() => {
    if (!buttonSelected) {
      return;
    }
  }, [buttonSelected]);

  useEffect(() => {
    if (!buttonSelected) return;
    //currentSentence.type convert to word
    const convert = convertType(currentSentence.type);

    if (buttonSelected.toLowerCase() === convert) {
      setCorrectAnswer(true);
      setPlayerAnswered(true);
      setRecordGame((prev) => ({
        ...prev,
        score: prev.score + 1,
      }));
      setPlayerAnswered(true);
      return;
    } else {
      setPlayerAnswered(true);
      setCorrectAnswer(false);
      setRecordGame((prev) => ({
        ...prev,
        incorrect: {
          number: prev.incorrect.number + 1,
          answers: [...prev.incorrect.answers, currentSentence.sentence], // push new incorrect answer
        },
      }));
      return;
    }
  }, [buttonSelected]);

  const getSentenceFromArray = () => {
    setRecordGame((prev) => ({
      ...prev,
      begun: true,
    }));
    setPlayerAnswered(false);
    setCorrectAnswer(undefined);
    setButtonSelected("");
    setCurrentSentence((prev) => ({
      ...prev,
      hint: false,
    }));

    let copySentences = [...originalSentences]; // not necessary when using filter/map. Only sort or change

    if (!currentSentence) return;

    if (copySentences.length === 0) {
      setTimeout(() => {
        console.log("All completed");
        setRecordGame((prev) => ({
          ...prev,
          finished: true,
        }));
        return;
      }, 700);
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
    setCurrentSentence((prev) => ({
      ...prev,
      hint: true,
    }));
  };

  if (!recordGame.finished) {
    return (
      <div className="container">
        <h2>Conditional Sentences V2</h2>
        <div>
          <p>
            Sentence: <strong>{currentSentence.sentence} </strong>
          </p>

          <div className="buttonsAction">
            <button className="next-sentence" onClick={getSentenceFromArray}>
              {count === 0 ? "Get Sentence" : "Next Sentence"}
            </button>

            {!playerAnswered && (
              <CheckTypeButtons onSelect={setButtonSelected} />
            )}
          </div>

          <p>
            {currentSentence.sentence && (
              <>
                {correctAnswer === undefined ? (
                  "Select answer"
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
            {currentSentence.type !== undefined && !playerAnswered && (
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
            )}
          </p>

          <p>Score: {recordGame.score}</p>
          {!recordGame.begun && <Modal />}
        </div>
      </div>
    );
  } else {
    return (
      <div className="finish-overlay">
        <h1>FINISHED</h1>
        <div className="result">
          <p>Here are the questions which you got incorrect</p>
          <CatchIncorrectAnswers
            sentences={recordGame.incorrect.answers}
            count={recordGame.incorrect.number}
          />
          <button onClick={() => location.reload()}>Reload</button>
          <br />
        </div>
        <Modal />
      </div>
    );
  }
}
