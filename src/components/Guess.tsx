import { LetterBox } from "./LetterBox";

interface GuessProps {
  wordLength: number;
}

export function Guess({ wordLength }: GuessProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: wordLength }).map((_, index) => (
        <LetterBox key={index} />
      ))}
    </div>
  );
}
