import { SyntheticEvent, useState } from "react";
import { InputText } from "./InputText";
import { Button } from "./Button";

interface GuessFormProps {
  wordLength: number;
  onSubmit(val?: string): void;
}

export function GuessForm({ wordLength, onSubmit }: GuessFormProps) {
  const [guess, setGuess] = useState<string>();

  const handleSetGuess = (val: string) => {
    setGuess(val);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    onSubmit(guess);
    setGuess("");
  };

  return (
    <form className="flex gap-3" onSubmit={handleSubmit}>
      <div className="flex-1">
        <InputText
          onChange={handleSetGuess}
          value={guess}
          minLength={wordLength}
          maxLength={wordLength}
        />
      </div>
      <Button
        type="submit"
        label="Guess"
        disabled={guess?.length !== wordLength}
      />
    </form>
  );
}
