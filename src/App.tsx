import { useState } from "react";

import { Layout } from "./components/Layout";
import { useGetWord } from "./hooks/useGetWord";
import { GameBoard } from "./components/GameBoard";
import { NewGameOptions } from "./components/NewGameOptions";

function App() {
  const [wordLength] = useState(5);
  const [allowedGuesses] = useState(5);
  const answer = useGetWord(wordLength);

  const handleNewGame = (length: number, attempts: number) => {
    console.log({length, attempts});
  }

  return (
    <Layout>
      <div className="grid gap-16">
        Answer: {answer}
        <NewGameOptions onSubmit={handleNewGame}  />
        <GameBoard answer={answer} allowedGuesses={allowedGuesses} />
      </div>
    </Layout>
  );
}

export default App;
