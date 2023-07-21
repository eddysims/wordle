import { useState } from "react";

import { GuessForm } from "./GuessForm";
import { Guess } from "./Guess";

type GameStatus = "win" | "lose" | undefined;

interface GameBoardProps {
  answer: string;
  allowedGuesses?: number;
}

export function GameBoard({ answer, allowedGuesses = 5 }: GameBoardProps) {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>();

  const handleAddGuess = (val: string) => {
    const newGuesses = [...guesses, val];
    setGuesses(newGuesses);

    if(val === answer) {
      setGameStatus('win')
      return;
    }

    if(newGuesses.length === allowedGuesses) {
      setGameStatus('lose');
      return;
    }
  };

  return (
    <div className="grid gap-8">
      <div className="grid gap-3 justify-center">
        {Array.from({ length: allowedGuesses }).map((_, index) => (
          <Guess key={index} answer={answer} word={guesses?.[index]} />
        ))}
      </div>

      {gameStatus === "win" && (
        <div className="text-center text-green-500 text-xl">You Win 🎉</div>
      )}

      {gameStatus === "lose" && (
        <div className="text-center text-red-500 text-xl">You Lose 😢</div>
      )}

      {!gameStatus && (
        <GuessForm wordLength={answer.length} onSubmit={handleAddGuess} />
      )}
    </div>
  );
}
