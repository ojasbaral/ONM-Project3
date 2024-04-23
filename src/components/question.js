import React from 'react'
import data from '../assets/questions.json'

const Question = ({ question, points, setPoints, setQuestion }) => {

    function handleAnswer(index) {
        //console.log(data.questions[question].answers[index])
        var editPoints = points
        for (const [key, value] of Object.entries(data.questions[question].answers[index].points)){
            editPoints[key] += value
        }
        setPoints(editPoints)
        setQuestion(question+1)
    }

  return (
    <>
    <p className="text-xl text-gray-700 text-center mb-8">
        {data.questions[question].question}
      </p>
    {data.questions[question].answers.map((answer, index) => (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 min-w-96 max-w-96 break-words" onClick={() => handleAnswer(index)}>{answer.answer}</button>
    ))}
    </>
  )
}

export default Question