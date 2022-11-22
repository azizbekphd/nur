export default (s: string, ...args: any[]): string => {
    args.forEach((a, i) => s = s.replaceAll(`{${i}}`, a));
    return s;
}