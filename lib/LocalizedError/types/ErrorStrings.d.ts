import ErrorName from "./ErrorName";

type ErrorStrings = {
  [key in keyof typeof ErrorName]: string;
};

export default ErrorStrings;
