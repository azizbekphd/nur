import ErrorName from "./types/ErrorName";

function getLocalizedError(name: string, locale: string | undefined) {
  const errorNameKeys = Object.keys(ErrorName);
  const errorNames = errorNameKeys.splice(-(errorNameKeys.length / 2));
  name = errorNames.includes(name) ? name : "UnknownError";
  return name;
}

export default getLocalizedError;
