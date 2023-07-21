import { useState } from "react";

import { GuessForm } from "./GuessForm";
import { Guess } from "./Guess";

interface GameBoardProps {
  answer: string;
  allowedGuesses?: number;
}

export function GameBoard({ answer, allowedGuesses = 5 }: GameBoardProps) {
  const [guesses, setGuesses] = useState<string[]>([]);

  const handleAddGuess = (val: string) => {
    setGuesses([...guesses, val]);
  };

  return (
    <div className="grid gap-8">
      <div className="grid gap-3 justify-center">
        {Array.from({ length: allowedGuesses }).map((_, index) => (
          <Guess
            key={index}
            wordLength={answer.length}
            word={guesses?.[index]}
          />
        ))}
      </div>
      <GuessForm wordLength={answer.length} onSubmit={handleAddGuess} />
    </div>
  );
}
