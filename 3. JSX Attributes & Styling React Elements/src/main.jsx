import ReactDOM from 'react-dom/client'

import './index.css'

import arnold from './Images/arnold.jpg'
import steve from './Images/steve-jobs.jpg'
import vivekanada from './Images/swami-vivekanada.jpg'

// ReactDOM.createRoot(WHERE TO SHOW IT, WHAT TO SHOW)

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1 className="heading">My great idols</h1>
    <div>
      <img className="my-img" src={arnold} alt=" pic of arnold" />
      <img className="my-img" src={steve} alt="pic of steve" />
      <img className="my-img" src={vivekanada} alt="pic of vivekananda" />
    </div>
  </div>
)
