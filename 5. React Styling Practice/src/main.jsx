import ReactDOM from 'react-dom/client'

import './index.css'

// ReactDOM.createRoot(WHERE TO SHOW IT, WHAT TO SHOW)

const date = new Date()
const currentTime = date.getHours()
// const currentTime = 19;

let greeting = ''

const customStyle = {
  color: '',
}

if (currentTime < 12) {
  greeting = 'Good Morning'
  customStyle.color = 'green'
} else if (currentTime < 16) {
  greeting = 'Good Afernoon'
  customStyle.color = 'red'
} else {
  greeting = 'Good Evening'
  customStyle.color = 'purple'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>
)
