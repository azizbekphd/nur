import Link from "next/link";
import ButtonProps from "./ButtonProps";
import styles from "./Button.module.css";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";

type ButtonBaseProps = {
    buttonType: string,
} & ButtonProps;

const ButtonBase = (props: ButtonBaseProps) => {
  const className = [styles.button, props.buttonType].join(" ");

  return props.hasOwnProperty("href") ? (
    <Link className={className} href={parseUrl(props.href!)}>
      {props.children}
    </Link>
  ) : (
    <button className={className} onClick={(e) => {
        e.stopPropagation();
        props.onClick!()
      }} type={"button"}>
      {props.children}
    </button>
  );
};

export default ButtonBase;
