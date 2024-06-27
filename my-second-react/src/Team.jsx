import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAddKor = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };

  const handleRemoveKor = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadious: "15px",
  };

  return (
    <div style={teamStyle}>
      <h3>Players : {team} </h3>
      <button onClick={handleAddKor}>Add Kor</button>
      <button onClick={handleRemoveKor}>Remove Kor</button>
    </div>
  );
}
