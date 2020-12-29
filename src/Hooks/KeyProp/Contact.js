import React from 'react'

const defaultValuesByTopic = {
  training: 'I would like some training',
  consulting: 'I have consulting needs',
  question: 'I have some questions',
}

const Contact = () => {
  const [topic, setTopic] = React.useState('training')
  return (
    <form>
      <label htmlFor="topic">Topic</label>
      <select id="topic" value={topic} onChange={e => setTopic(e.target.value)}>
        <option value="training">Training</option>
        <option value="consulting">Consulting</option>
        <option value="question">Question</option>
      </select>
      <label htmlFor="subject">Email Subject</label>
      <input
        id="subject"
        key={topic}
        defaultValue={defaultValuesByTopic[topic]}
      />
      <label htmlFor="body">Email body</label>
      <textarea id="body" />
    </form>
  )
}

const Counter = () => {
  console.log('Counter called')

  const [count, setCount] = React.useState(() => {
    console.log('Counter useState initializer')
    return 0
  })
  const increment = () => setCount(c => c + 1)

  React.useEffect(() => {
    console.log('Counter useEffect callback')
    return () => {
      console.log('Counter useEffect cleanup')
    }
  }, [])

  console.log('Counter returning react elements')
  return <button onClick={increment}>{count}</button>
}

const CounterParent = () => {
  const [keyCounterKey, setKeyCounterKey] = React.useReducer(c => c + 1, 0)
  return (
    <div>
      <button onClick={setKeyCounterKey}>reset</button>
      <Counter key={keyCounterKey} />
    </div>
  )
}

export const AppContact = () => {
  return (
    <div>
      <Contact />
      <hr />
      <CounterParent />
    </div>
  )
}
