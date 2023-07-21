import { LetterBox } from "./LetterBox";

interface GuessProps {
  wordLength: number;
  word?: string;
  answer?: string;
}

export function Guess({ wordLength, word }: GuessProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: wordLength }).map((_, index) => {
        return <LetterBox key={index} letter={word && word[index]} />;
      })}
    </div>
  );
}
