import PI, { doublePi, triplePi } from './math'

function App() {
  return (
    <div>
      <li>The value of PI is {PI}</li>
      <li>The value of PI * 2 is {doublePi()}</li>
      <li>The value of PI * 3 is {triplePi()}</li>
    </div>
  )
}

export default App
