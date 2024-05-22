import ReactDOM from 'react-dom/client'

import './index.css'

// ReactDOM.createRoot(WHERE TO SHOW IT, WHAT TO SHOW)

const customStyle = {
  color: 'purple',
  padding: '5px',
  fontSize: '20px',
  border: '1px solid black',
  width: '30%',
}

// customStyle.color = "green"

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1 style={customStyle} className="heading">
      Time when i was enjoying.
    </h1>
  </div>
)
