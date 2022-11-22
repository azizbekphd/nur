import ButtonBase from "./ButtonBase";
import ButtonProps from "./ButtonProps";
import styles from "./Button.module.css";

const FilledButton = (props: ButtonProps) => {
    return <ButtonBase {...props} buttonType={styles.filledButton} />
}

export default FilledButton;