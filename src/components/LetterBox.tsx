import { clsx } from "clsx";

export type LetterStatus = "unused" | "used" | "correct"

interface LetterBoxProps {
  letter?: string;
  status?: LetterStatus;
}

export function LetterBox({ letter, status }: LetterBoxProps) {
  const classNames = clsx(
    "border border-neutral-300 flex items-center justify-center h-10 w-10 rounded",
    {
      "bg-white": status === "unused",
      "bg-yellow-100": status === "used",
      "bg-green-100": status === "correct",
    }
  );

  return <div className={classNames}>{letter && letter[0]}</div>;
}
