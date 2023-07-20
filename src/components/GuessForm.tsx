import { ChangeEvent, useState } from "react";

interface GuessFormProps {
  wordLength: number;
  onSubmit(val?: string): void;
}

export function GuessForm({ wordLength, onSubmit }: GuessFormProps) {
  const [guess, setGuess] = useState<string>();

  const handleSetGuess = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setGuess(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(guess);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleSetGuess}
        value={guess}
        minLength={wordLength}
        maxLength={wordLength}
        className="bg-white py-3 px-5 rounded-l-full outline-0 focus:"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="py-3 bg-green-600 px-5 rounded-r-full uppercase font-bold tracking-wide text-white hover:bg-green-400 transition-colors"
      >
        Guess
      </button>
    </div>
  );
}
