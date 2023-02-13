import { useState } from 'react'

const Statistics = (props) => {
  console.log(props.allFeedback)
  if (props.allFeedback.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }


  return (
    <div>
      <p>Good: </p>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Number of given feedback: {props.allFeedback.length}</p>
      <p>Average of given feedback: {props.allFeedback.reduce((a, b) => a + b, 0) /
        props.allFeedback.length}</p>
      <p>Percent of "Good" feedback: {props.good / props.allFeedback.length * 100} %</p>
    </div>
  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAll] = useState([])

  const handleGoodClick = () => {
    console.log('Good feedback')
    setAll(allFeedback.concat(1))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log('Neutral feedback')
    setAll(allFeedback.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    console.log('Bad feedback')
    setAll(allFeedback.concat(-1))
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>Give feedback to Unicafe!</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1>Statistics:</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allFeedback={allFeedback} />
    </div>
  )
}

export default App