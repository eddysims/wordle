import { LetterBox, LetterStatus } from "./LetterBox";

interface GuessProps {
  word?: string;
  answer: string;
}

export function Guess({ word, answer }: GuessProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: answer.length }).map((_, index) => {
        const letter = word?.[index];

        let status: LetterStatus = "unused";
        if (letter && answer.includes(letter)) {
          status = "used";
        }

        if (letter && answer[index] === letter) {
          status = "correct";
        }

        return <LetterBox key={index} letter={letter} status={status} />;
      })}
    </div>
  );
}
