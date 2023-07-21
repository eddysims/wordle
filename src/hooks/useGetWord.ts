import { generate } from "random-words";

export function useGetWord(length: number = 5): string {
  const word = generate({ minLength: length, maxLength: length });

  /**
   * Casting this type as the 'random-words' package
   * appears to have a type error in it. It claims to
   * always return an array, but that isn't true.
   */
  return word as unknown as string;
}
