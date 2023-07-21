import { useState } from "react";
import { InputRange } from "./InputRange";
import { Button } from "./Button";

interface NewGameOptionsProps {
  onSubmit(length: number, attempts: number): void;
}

export function NewGameOptions({ onSubmit }: NewGameOptionsProps) {
  const [wordLength, setWordLength] = useState<number>();
  const [allowedAttempts, setAllowedAttempts] = useState<number>();

  const handleClick = () => {
    onSubmit(wordLength ?? 5, allowedAttempts ?? 5);
  };

  return (
    <div className="grid gap-1">
      <InputRange
        label="Word Length"
        onChange={(val) => setWordLength(val)}
        min={3}
        max={8}
      />
      <InputRange
        label="Attempts"
        onChange={(val) => setAllowedAttempts(val)}
      />
      <div className="mt-5 grid">
        <Button label="New Game" onClick={handleClick} size="small" />
      </div>
    </div>
  );
}
