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
      <StatiscticLine text='Good' value={props.good} />
      <StatiscticLine text='Neutral' value={props.neutral} />
      <StatiscticLine text='Bad' value={props.bad} />
      <StatiscticLine text='Number of given feedback' value={props.allFeedback.length} />
      <StatiscticLine text='Average of given feedback' value={props.allFeedback.reduce((a, b) => a + b, 0) /
        props.allFeedback.length} />
      <StatiscticLine text='Percent of "Good" feedback' value={props.good / props.allFeedback.length * 100} />
    </div>
  )
}

const StatiscticLine = ({ value, text }) => {
  if (text === 'Percent of "Good" feedback') {
    return (
      <table>
        <tbody>
          <tr>
            <td>{text}:</td>
            <td>{value}%</td>
          </tr>
        </tbody>
      </table>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}:</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


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
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <h1>Statistics:</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allFeedback={allFeedback} />
    </div>
  )
}

export default App