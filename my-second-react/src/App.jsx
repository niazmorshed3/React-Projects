import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import State from "./State";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("CHap Lagche");
  }
  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h2>React Core Concepts Part-2</h2>
      <State></State>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button> <br />
      <button
        onClick={() => {
          alert("Lege Giyeche CHap");
        }}
      >
        Second Click
      </button>{" "}
      <br />
      <button onClick={() => addToFive(5)}>5 Chapo</button>
    </>
  );
}

export default App;
