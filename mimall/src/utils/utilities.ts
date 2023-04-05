export const capitalize = (word: string) => {
  if (!word) return;
  if (word === "knh") return word.toUpperCase();

  return word
    .split("-")
    .map((word) => `${String(word[0]?.toUpperCase())}${word.slice(1)}`)
    .join(" ");
};
