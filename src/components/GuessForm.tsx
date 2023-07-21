import { useState } from "react";
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

  const handleSubmit = () => {
    onSubmit(guess);
  };

  return (
    <div className="flex gap-3">
      <InputText
        onChange={handleSetGuess}
        value={guess}
        minLength={wordLength}
        maxLength={wordLength}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
        label="Guess"
        disabled={guess?.length !== wordLength}
      />
    </div>
  );
}
