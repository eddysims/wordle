import { generate } from "random-words";

export function useGetWord(length: number = 5) {
  const word = generate({ minLength: length, maxLength: length });
  
  return word;
}