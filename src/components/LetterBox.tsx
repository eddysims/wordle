interface LetterBoxProps {
  letter?: string;
  // status: 'empty' | 'close' | 'success'
}

export function LetterBox({ letter }: LetterBoxProps) {
  return (
    <div className="border border-neutral-300 flex items-center justify-center h-10 w-10 rounded">
      {letter && letter[0]}
    </div>
  );
}
