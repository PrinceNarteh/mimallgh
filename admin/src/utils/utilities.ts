export const capitalize = (word: string) => {
  if (!word) return;
  if (word === "knh") return word.toUpperCase();

  return word
    .split("_")
    .map((word) => `${word[0]?.toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(" ");
};
