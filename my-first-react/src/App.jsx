import "./App.css";
import Todo from "../Todo";
import Actor from "./Actor";
import Singers from "./Singers";
import BookStore from "./BookStore";

function App() {
  const actors = [
    "Sakib Khan",
    "Shoriful Raj",
    "Joshim",
    "Rubel",
    "Salman Shah",
  ];

  const singers = [
    { id: 1, name: "dr.Mahfujur Rahman", age: 68777777 },
    { id: 2, name: "Hridoy Khan", age: 45 },
    { id: 3, name: "Pritom Hasan", age: 25 },
  ];

  const books = [
    { id: 1, name: "Physics", price: 100 },
    { id: 2, name: "Biology", price: 200 },
    { id: 3, name: "Mat", price: 300 },
    { id: 4, name: "English", price: 400 },
    { id: 5, name: "Bangla", price: 500 },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Exploring Core Concepts" isDone={false}></Todo>
      <Todo task="Trying New JSX" isDone={true}></Todo> */}

      {/* {singers.map((i) => (
        <Singers singer={i}></Singers>
      ))}

      <Actor name={"Bapp raz"}></Actor>
      {actors.map((i) => (
        <Actor name={i}></Actor>
      ))} */}

      {/* <Device name="Laptop" price="200"></Device>
      <Device name="Mobile" price="500"></Device>
      <Device name="Watch" price="700"></Device>
      <Person></Person> <br />
      <Student grade="7" score="99"></Student>
      <Student grade="10" score="79"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Person() {
  const age = 25;
  const money = 500;
  return <h>I am a Person with age {age + money}</h>;
}

const { grade, score } = { grade: "7", score: "99" };

function Student({ grade = "0", score = "00" }) {
  return (
    <div className="student">
      <h3>This is a Student</h3>
      <p>Grade : {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Device(props) {
  console.log(props);
  return (
    <h2>
      This Device : {props.name} Price Hoilo : {props.price}{" "}
    </h2>
  );
}

function Developer() {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px solid purple",
        borderRadius: "20px",
      }}
    >
      <h5>Devo Devo</h5>
      <p>Coding</p>
    </div>
  );
}

export default App;
