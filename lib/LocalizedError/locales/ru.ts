import ErrorStrings from "../types/ErrorStrings";

const ru: ErrorStrings = {
  AuthError: "Ошибка авторизации",
  AuthApiError: "Ошибка API авторизации",
  AuthUnknownError: "Неизвестная ошибка авторизации",
  AuthSessionMissingError: "Сеанс авторизации отсутствует",
  AuthInvalidCredentialsError: "Неверные реквизиты для авторизации",
  AuthImplicitGrantRedirectError: "Ошибка неявного перенаправления гранта",
  AuthRetryableFetchError: "Не удалось загрузить данные",
};

export default ru;