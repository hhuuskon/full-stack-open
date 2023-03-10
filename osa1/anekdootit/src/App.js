// Notes to self
// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
  {text}
  </button>
)

const AnecdoteText = ({ text }) => (
  <div>
    {text}
  </div>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [points, setVote] = useState(new Array(anecdotes.length).fill(0))

  const [selected, setSelected] = useState(0)

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(selected)
  }

  const handleVote = () => {
    console.log('vote')
    const copy = [...points]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <AnecdoteText text={anecdotes[selected]} />
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleAnecdote} text='next anecdote' />
      <Button handleClick={handleVote} text='vote' />
      <h1>Anecdote with most votes</h1>
      <AnecdoteText text={anecdotes[points.indexOf(Math.max(...points))]} />
      <p>has {Math.max(...points)} votes</p>

    </div>
  )
}

export default App