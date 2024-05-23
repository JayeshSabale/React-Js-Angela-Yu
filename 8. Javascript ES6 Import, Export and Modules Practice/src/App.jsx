import { add, sub, multiply, divide } from "./calculator";

function App() {
  return (
    <div>
      <li>{add(1, 2)}</li>
      <li>{sub(7, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{divide(5,2)}</li>
    </div>
  );
}

export default App
