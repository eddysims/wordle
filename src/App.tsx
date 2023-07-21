import { useState } from "react";

import { Layout } from "./components/Layout";
import { useGetWord } from "./hooks/useGetWord";
import { GameBoard } from "./components/GameBoard";

function App() {
  const [wordLength, setWordLength] = useState(5);
  const [allowedGuesses, setAllowedGuesses] = useState(5);
  const answer = useGetWord(wordLength);

  const handleNewGame = (length: number, attempts: number) => {
    setWordLength(length);
    setAllowedGuesses(attempts);
  };

  return (
    <Layout>
      <div className="grid gap-16">
        <GameBoard
          answer={answer}
          allowedGuesses={allowedGuesses}
          onNewGame={handleNewGame}
        />
      </div>
    </Layout>
  );
}

export default App;
