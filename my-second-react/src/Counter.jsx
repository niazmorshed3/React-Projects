import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleChapo = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleKomao = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: "2px solid purple" }}>
      <h3>Counter : {count} </h3>
      <button onClick={handleChapo}>Chapo</button> <br />
      <button onClick={handleKomao}>Komao</button>
    </div>
  );
}
