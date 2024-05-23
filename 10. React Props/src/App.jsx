import jayesh1 from "./images/jayesh1.jpg";
import jayesh2 from "./images/jayesh2.jpg";
import jayesh3 from "./images/jayesh3.jpg";

import "./App.css"

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="jayesh1" width="200px" height="200px" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>My Contacts</h1>

      <Card
        name="Jayesh @ 2022"
        img={jayesh1}
        tel="123-456-789"
        email="jay@123.com"
      />

      <Card
        name="Jayesh @ 2017"
        img={jayesh2}
        tel="758-112-382"
        email="tipu@123.com"
      />

      <Card
        name="Jayesh @ 2023"
        img={jayesh3}
        tel="726-827-275"
        email="cycle@123.com"
      />
    </div>
  );
}

export default App;
