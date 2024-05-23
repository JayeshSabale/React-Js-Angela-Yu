import PI , {doublePi, triplePi} from "./math"

function App() {
  return (
    <div>
      <li>{PI}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </div>
  );
}

export default App
