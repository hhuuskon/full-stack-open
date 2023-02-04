import { useState } from 'react'

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
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>     
    </div>
  )
}

export default App