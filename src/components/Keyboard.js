import { useState } from "react";
import Grid from "./Grid";
import LetterButtons from "./LetterButtons";

function Keyboard() {
  const initialGuessState = [" ", " ", " ", " ", " "];
  const initialGridState = [
    [...initialGuessState],
    [...initialGuessState],
    [...initialGuessState],
    [...initialGuessState],
    [...initialGuessState],
    [...initialGuessState],
  ];

  const [rowState, setRowState] = useState(0);
  const [columnState, setColumnState] = useState(0);
  const [previousGuess, setPreviousGuess] = useState(initialGridState);

  //previousGuess should actually be grid state

  //keyboard needs to grey out
  //figure out logic for double letters

  return (
    <div>
      <Grid className="Grid" previousGuess={previousGuess}></Grid>
      <LetterButtons
        className="LetterButtons"
        rowState={rowState}
        setRowState={setRowState}
        columnState={columnState}
        setColumnState={setColumnState}
        previousGuess={previousGuess}
        setPreviousGuess={setPreviousGuess}
      ></LetterButtons>
    </div>
  );
}

export default Keyboard;
