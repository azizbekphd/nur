import ButtonBase from "./ButtonBase";
import ButtonProps from "./ButtonProps";
import styles from "./Button.module.css";

const TextButton = (props: ButtonProps) => {
    return <ButtonBase {...props} buttonType={styles.textButton} />
}

export default TextButton;