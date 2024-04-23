import React, { useState } from 'react'
import Question from './components/question'
import data from './assets/questions.json'

function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [points, setPoints] = useState({
    odin: 0,
    freyja: 0,
    thor: 0,
    loki: 0,
    tyr: 0,
    heimdall: 0,
    freyr: 0,
    frigg: 0
  })
  const [question, setQuestion] = useState(0)

  if(question === 10){
    let max = 0
    let name = ''
    for (const [key, value] of Object.entries(points)){
      if (value >= max){
        max = value
        name = key
      }
    }
    return <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-4">Which Old Norse Mythology Character Are You?</h1>

      
      
      <p className="text-2xl text-gray-700 text-center mb-8">
        You are most like {data.info[name].name}
      </p>
      <img className="max-h-96" src={data.info[name].image}></img>
      <p className="text-xl text-gray-700 text-center mb-8 p-2">
        {data.info[name].desc} <a className='text-blue-500 underline' href={data.info[name].link} target="_blank">Learn more here</a>
      </p>


      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.reload()}>
        Restart Quiz
      </button>
      
      

     


    </div>
  }


  return (
<div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-4">Which Old Norse Mythology Character Are You?</h1>

      {!quizStarted && 
      <>
      <p className="text-xl text-gray-700 text-center mb-8">
        Take our short 10 question quiz to figure out which Norse mythology character you are
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setQuizStarted(true)}>
        Begin Quiz
      </button>
      </>
      }

      {quizStarted &&
        <Question question={question} points={points} setPoints={setPoints} setQuestion={setQuestion}/>
      }


    </div>
  );
}

export default App;
