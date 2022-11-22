import { NextRouter } from "next/router";
import I18nStrings from "./I18nStrings";

type I18n = {
    S: I18nStrings,
    formatString: (s: string, ...args) => string,
} & NextRouter;