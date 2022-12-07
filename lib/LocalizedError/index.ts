import en from "./locales/en";
import ru from "./locales/ru";
import uz from "./locales/uz";
import ErrorName from "./types/ErrorName";
import ErrorStrings from "./types/ErrorStrings";
import LocalizedError from "./types/LocalizedError";

const ErrorRepository = new Map<string, ErrorStrings>([
    ["en", en],
    ["ru", ru],
    ["uz", uz],
])

function getLocalizedError(name: string, locale: string): LocalizedError {
  const errorNameKeys = Object.keys(ErrorName);
  const errorNames = errorNameKeys.splice(-(errorNameKeys.length / 2));
  name = errorNames.includes(name) ? name : "UnknownError";
  const repo = ErrorRepository.get(ErrorRepository.has(locale) ? locale : "en")!;
  const error = Object.entries(repo).find((v)=> v[0] === name)

  return {
    locale: locale,
    name: name,
    message: error![1],
  }
}

export default getLocalizedError;
