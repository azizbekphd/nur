import en from "./locales/en";
import { useRouter } from "next/router";
import ru from "./locales/ru";
import { I18n } from "./types/I18n";
import I18nStrings from "./types/I18nStrings";
import formatString from "./formatString";

const strings: Map<string, I18nStrings> = new Map([
  ["en", en],
  ["ru", ru],
]);

function useI18n(): I18n {
  const router = useRouter();
  return {
    S: strings.get(router.locale ?? "en")!,
    formatString: formatString,
    ...router,
  };
}

export default useI18n;
