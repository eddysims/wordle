import { useState } from "react";

import { Layout } from "./components/Layout";
import { useGetWord } from "./hooks/useGetWord";
import { GameBoard } from "./components/GameBoard";

function App() {
  const [wordLength] = useState(5);
  const [allowedGuesses] = useState(5);
  const answer = useGetWord(wordLength);

  return (
    <Layout>
      <div className="grid gap-8">
        Answer: {answer}
        <GameBoard answer={answer} allowedGuesses={allowedGuesses} />
      </div>
    </Layout>
  );
}

export default App;
