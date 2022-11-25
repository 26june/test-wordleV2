function Grid({ previousGuess }) {
  return (
    <div className="gameGrid">
      <div className="gameGrid-rows">
        {previousGuess[0].map((element, index) => {
          return (
            <p key={index} id={`row0-${index}`}>
              {element}
            </p>
          );
        })}
      </div>
      <div className="gameGrid-rows">
        {previousGuess[1].map((element, index) => {
          return <p key={index}>{element}</p>;
        })}
      </div>
      <div className="gameGrid-rows">
        {previousGuess[2].map((element, index) => {
          return <p key={index}>{element}</p>;
        })}
      </div>
      <div className="gameGrid-rows">
        {previousGuess[3].map((element, index) => {
          return <p key={index}>{element}</p>;
        })}
      </div>
      <div className="gameGrid-rows">
        {previousGuess[4].map((element, index) => {
          return <p key={index}>{element}</p>;
        })}
      </div>
      <div className="gameGrid-rows">
        {previousGuess[5].map((element, index) => {
          return <p key={index}>{element}</p>;
        })}
      </div>
    </div>
  );
}

export default Grid;
