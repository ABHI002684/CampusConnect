import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuizBar = ({ quiz }) => {
  const { quizId, quizName, hours, minutes, time, date } = quiz;
  return (
    <div
      className="w-11/12 p-3 flex transition-shadow duration-300 mx-auto m-3 rounded-2xl border-4 
      border-gray-800 hover:shadow-blue-400 shadow-lg justify-between items-center"
    >
      <p className="text-xl flex flex-col italic text-white font-sans">
        <span className="text-white no-underline">{quizName}</span>
        <span className="text-gray-400 text-sm italic">{`Duration: ${hours}hrs ${minutes}min at ${time} ${date}`}</span>
      </p>
      <div className="flex p-1">
        <div className="cursor-pointer w-fit h-fit text-white mr-2 bg-white/30 p-1 rounded-md hover:text-black hover:bg-orange-300">
          Take Quiz
        </div>
      </div>
    </div>
  );
};

const Quiz = () => {
  const [Quizes, setQuizes] = useState([]);
  const studentId = localStorage.getItem("studentId");
  const { courseId } = useParams();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.post("/api/quiz/viewAllQuiz", {
          studentId: studentId,
          courseId: "67eaa21786a568b53909b7fd",
        });
        console.log(response);
        setQuizes(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuiz();
  }, [studentId, courseId]);

  return (
    <div className="w-full mx-auto flex flex-col p-4">
      {Quizes.map((quiz) => (
        <QuizBar key={quiz.quizId} quiz={quiz} />
      ))}
    </div>
  );
};

export default Quiz;
