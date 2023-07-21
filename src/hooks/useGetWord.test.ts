import { useGetWord } from "./useGetWord";

it('returns a word', () => {
  const word = useGetWord();

  expect(word).not.toBeUndefined();
})

it('returns a word with the proper length', () => {
  const word = useGetWord(12);
  expect(word.length).toBe(12);
})