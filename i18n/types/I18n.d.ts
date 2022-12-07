import { NextRouter } from "next/router";
import { i18n } from "../../next.config";
import I18nStrings from "./I18nStrings";

type I18n = {
  S: I18nStrings;
  formatString: (s: string, ...args) => string;
} & NextRouter;

export { I18n };
