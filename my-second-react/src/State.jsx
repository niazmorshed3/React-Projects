import { useState } from "react";

const State = () => {
  const [player, setPlayer] = useState(50);
  const handleGirlfriend = () => {
    const newGirlfriend = player + 1;
    setPlayer(newGirlfriend);
  };
  const handleGirlfriendReduce = () => {
    const vari = player - 1;
    setPlayer(vari);
  };

  return (
    <div style={{ border: "2px solid green", padding: "4px", margin: "4px" }}>
      <h3>Bhai Er Girlfriend : {player} </h3>
      <button onClick={handleGirlfriend}>Add Koren</button>
      <button onClick={handleGirlfriendReduce}>Koman Bhaai</button>
    </div>
  );
};

export default State;
