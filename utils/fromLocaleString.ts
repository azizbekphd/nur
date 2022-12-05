import { LocaleString } from "@prisma/client";

export default function fromLocaleString(
  localeString: LocaleString,
  currentLocale: string | undefined
) {
  switch (currentLocale) {
    case "en":
      return localeString.en;
    case "ru":
      return localeString.ru;
    case "uz":
      return localeString.uz;
    default:
      return localeString.en;
  }
}
