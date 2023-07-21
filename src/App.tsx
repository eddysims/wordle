import { useState } from "react";
import { Layout } from "./components/Layout";
import { useGetWord } from "./hooks/useGetWord";
import { GuessForm } from "./components/GuessForm";
import { Guess } from "./components/Guess";

const MAX_GUESSES = 5;

function App() {
  const [wordLength] = useState(5);
  const [guesses, setGuesses] = useState<string[]>([])
  const word = useGetWord(wordLength);

  const handleAddGuess = (val: string) => {
    setGuesses([...guesses, val])
  }

  return (
    <Layout>
      <div className="grid gap-8">
        <div className="grid gap-3 justify-center">
          {JSON.stringify(guesses)}
          {Array.from({ length: MAX_GUESSES }).map((_, index) => (
            <Guess key={index} wordLength={wordLength} word={guesses?.[index]} />
          ))}
        </div>
        <GuessForm wordLength={wordLength} onSubmit={handleAddGuess} />
      </div>
    </Layout>
  );
}

export default App;
