function LetterButtons(order) {
  const winner = "kevin".toUpperCase();
  const {
    setCurrentGuess,
    columnState,
    setColumnState,
    rowState,
    setRowState,
    previousGuess,
    setPreviousGuess,
  } = order;
  const keyboardArray = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  function addLetter(letter) {
    if (columnState < 5) {
      setPreviousGuess((currentPreviousGuess) => {
        const newPreviousGuess = [...currentPreviousGuess];
        newPreviousGuess[rowState][columnState] = letter;
        return newPreviousGuess;
      });

      setColumnState((currentColumnState) => {
        return currentColumnState + 1;
      });
    }
  }

  function handleEnter() {
    const inputRow = [
      ...document.getElementsByClassName("gameGrid-rows")[rowState].children,
    ];

    if (columnState === 5) {
      if (previousGuess[rowState].join("") === winner) {
        inputRow.map((element) => {
          return element.classList.add("greenRow");
        });

        alert("Winner");
      } else {
        const winnerArray = winner.split("");
        inputRow.map((element, index) => {
          if (winnerArray.includes(element.innerText)) {
            if (winnerArray[index] === element.innerText) {
              return element.classList.add("greenRow");
            } else {
              return element.classList.add("yellowRow");
            }
          } else {
            return element.classList.add("redRow");
          }
        });
      }

      if (rowState < 5) {
        setRowState((currentRowState) => {
          return currentRowState + 1;
        });
        setColumnState(0);
      }
    } else {
      alert("Enter more character");
    }

    if (rowState === 5) {
      alert(`The word was ${winner}`);
    }
  }

  function handleBackspace() {
    if (columnState >= 0) {
      setColumnState((currentColumnState) => {
        return currentColumnState - 1;
      });

      replaceLetterWithEmpty();
    }
  }

  function replaceLetterWithEmpty() {
    setPreviousGuess((currentPreviousGuess) => {
      const newPreviousGuess = [...currentPreviousGuess];
      newPreviousGuess[rowState][columnState - 1] = " ";
      return newPreviousGuess;
    });
  }

  return (
    <div className="keyboard-grid">
      <div className="top-row">
        {keyboardArray[0].split("").map((letter) => {
          return (
            <button key={`toprow${letter}`} onClick={() => addLetter(letter)}>
              {letter}
            </button>
          );
        })}
      </div>
      <div className="mid-row">
        {keyboardArray[1].split("").map((letter) => {
          return (
            <button key={`midrow${letter}`} onClick={() => addLetter(letter)}>
              {letter}
            </button>
          );
        })}

        <button
          id="backspace"
          onClick={() => {
            handleBackspace();
          }}
        >
          Del
        </button>
      </div>
      <div className="bot-row">
        {keyboardArray[2].split("").map((letter) => {
          return (
            <button key={`botrow${letter}`} onClick={() => addLetter(letter)}>
              {letter}
            </button>
          );
        })}

        <button id="enter" onClick={() => handleEnter()}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default LetterButtons;
