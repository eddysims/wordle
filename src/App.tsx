import { useState } from "react";
import { Layout } from "./components/Layout";
import { useGetWord } from "./hooks/useGetWord";
import { GuessForm } from "./components/GuessForm";

function App() {
  const [wordLength] = useState(5);
  const word = useGetWord(wordLength);

  return (
    <Layout>
      <div className="grid gap-5">
        <h1 className="text-3xl font-bold underline">{word}</h1>
        <GuessForm wordLength={wordLength} onSubmit={(val) => alert(val)} />
      </div>
    </Layout>
  );
}

export default App;
