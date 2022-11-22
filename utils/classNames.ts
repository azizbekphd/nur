export default function classNames(classNames: (string | false)[]): string {
  return classNames.filter((e) => e).join(" ");
}
