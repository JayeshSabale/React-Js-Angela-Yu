import ReactDOM from 'react-dom/client'

// ReactDOM.createRoot(WHERE TO SHOW IT, WHAT TO SHOW)

const fname = 'Jayesh'
const lname = 'Sabale'
const num = 26

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <h1>Hello {fname + ' ' + lname}</h1>
    <h1>Hello {`${fname} ${lname}...`}</h1>
    <p>My lucky number is {num} </p>
    <p>My lucky number is {35 + 3} </p>
    <p>The generated random number is {Math.floor(Math.random() * 10)} </p>
  </div>
)
