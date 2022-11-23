export default function classNames(...classNames: (string | boolean | null)[]): string {
  return classNames.filter((e) => e).join(" ");
}
