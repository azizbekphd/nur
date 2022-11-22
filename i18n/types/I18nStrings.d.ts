import StringKey from "./StringKey";

type I18nStrings = {
    [key in keyof typeof StringKey]: string;
};

export default I18nStrings;