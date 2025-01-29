export function matchCharactersWithRegex(word: string, searchTerm: string) {
  const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Construct a regex pattern that enforces order but allows small gaps
  const regexPattern = escapedSearchTerm
    .split("")
    .map((char, index) => (index === 0 ? char : `[^${char}]{0,2}${char}`)) // Allow at most 2 non-matching chars between each
    .join("");

  const regex = new RegExp(regexPattern, "i"); // 'i' flag for case-insensitive matching

  return regex.test(word);
}
