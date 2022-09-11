import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "./Spinner";

const DisplayQuestion = ({ name, categorieID, difficultyID, typeID }) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionList, setQuestionList] = useState("");
  const [loading, setLoading] = useState(true);
  const [caunter, setCaunter] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const [showAnser, setShowAnser] = useState(false);
  const [selectedAnser, setSelectedAnser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${categorieID}&difficulty=${difficultyID}&type=${typeID}`
        );
        const data = await request.json();

        setQuestionList(data.results);

        setQuestion(data.results[0].question);
        setAnswers([
          ...data.results[0].incorrect_answers,
          data.results[0].correct_answer,
        ]);
        setCorrectAnswer(data.results[0].correct_answer);

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
      console.log("fetch Api");
    };
    fetchData();
  }, []);

  const selectQuestion = () => {
    setQuestion(questionList[caunter + 1].question);
    setAnswers([
      ...questionList[caunter + 1].incorrect_answers,
      questionList[caunter + 1].correct_answer,
    ]);
    setCorrectAnswer(questionList[caunter + 1].correct_answer);
  };
  const select = (e) => {
    if (caunter !== 9) {
      // e.className = "btn btn-outline-primary active";
      setShowAnser(true);
      setSelectedAnser(e.id);
      if (e.id === correctAnswer) {
        setScore(score + 1);
      }
      setCaunter(caunter + 1);
      selectQuestion();
    } else {
      navigate(`/score/${name}/${score}`);
    }
  };
  // const style = (answer) => {
  //   console.log(selectedAnser, showAnser);
  //   if (showAnser === true) {
  //     if (correctAnswer === answer) {
  //       return { backgroundColor: "rgb(121, 240, 121)" };
  //     } else if (selectedAnser === answer) {
  //       return { backgroundColor: "red" };
  //     } else {
  //       return;
  //     }
  //   }
  // };

  return (
    <div className="container p-4 w-50 mt-5">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="card w-100 p-5">
            <div className="progress ">
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: (caunter + 1) * 25 }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="card-body mt-3">
              <h5 className="card-title">Question {caunter + 1}/10</h5>
              <h6 className="card-subtitle mb-2 text-muted mt-3">{question}</h6>
              <div className=" mt-4 ">
                {answers.map((i, index) => (
                  <button
                    id={i}
                    key={index}
                    onClick={(e) => {
                      select(e.target);
                    }}
                    // style={style(i)}
                    type="button"
                    className="btn btn-outline-dark w-100 my-2"
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayQuestion;
