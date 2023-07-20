import { useState } from "react";
import { Layout } from "./components/Layout";
import { useGetWord } from "./hooks/useGetWord";
import { GuessForm } from "./components/GuessForm";
import { Guess } from "./components/Guess";

const guesses = 5;

function App() {
  const [wordLength] = useState(5);
  const word = useGetWord(wordLength);

  return (
    <Layout>
      <div className="grid gap-8">
        <div className="grid gap-3 justify-center">
          {Array.from({ length: guesses }).map((_, index) => (
            <Guess key={index} wordLength={wordLength} />
          ))}
        </div>
        <GuessForm wordLength={wordLength} onSubmit={(val) => alert(val)} />
      </div>
    </Layout>
  );
}

export default App;
