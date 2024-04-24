import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand } from "./utils";
import { useState } from "react";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패패";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);

  const HandButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
  };
  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <HandButton value="rock" onClick={HandButtonClick} />
        <HandButton value="scissor" onClick={HandButtonClick} />
        <HandButton value="paper" onClick={HandButtonClick} />
      </div>
    </div>
  );
}

export default App;
