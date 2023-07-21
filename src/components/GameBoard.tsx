import { useState } from "react";

import { GuessForm } from "./GuessForm";
import { Guess } from "./Guess";
import { NewGameOptions } from "./NewGameOptions";

type GameStatus = "win" | "lose" | undefined;

interface GameBoardProps {
  answer: string;
  allowedGuesses?: number;
  onNewGame(wordLength: number, attempts: number): void;
}

export function GameBoard({
  answer,
  allowedGuesses = 5,
  onNewGame,
}: GameBoardProps) {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>();

  const handleAddGuess = (val: string) => {
    const newGuesses = [...guesses, val];
    setGuesses(newGuesses);

    if (val === answer) {
      setGameStatus("win");
      return;
    }

    if (newGuesses.length === allowedGuesses) {
      setGameStatus("lose");
      return;
    }
  };

  const handleNewGame = (wordLength: number, attempts: number) => {
    setGuesses([]);
    setGameStatus(undefined);
    onNewGame(wordLength, attempts);
  };

  return (
    <>
      <NewGameOptions onSubmit={handleNewGame} />
      <div className="grid gap-8 w-96">
        <div className="grid gap-3 justify-center">
          {Array.from({ length: allowedGuesses }).map((_, index) => (
            <Guess key={index} answer={answer} word={guesses?.[index]} />
          ))}
        </div>

        {gameStatus === "win" && (
          <div className="text-center text-green-500 text-xl">You Win 🎉</div>
        )}

        {gameStatus === "lose" && (
          <div className="text-center text-red-500 text-xl">
            You Lose 😢
            <div className="text-sm">The answer was {answer}</div>
          </div>
        )}

        {!gameStatus && (
          <GuessForm wordLength={answer.length} onSubmit={handleAddGuess} />
        )}
      </div>
    </>
  );
}
