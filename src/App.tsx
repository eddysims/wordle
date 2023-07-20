import { useState } from "react";
import { Layout } from "./components/Layout";
import { useGetWord } from "./hooks/useGetWord";

function App() {
  const [wordLength] = useState(5);
  const word = useGetWord(wordLength);

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">{word}</h1>
    </Layout>
  );
}

export default App;
