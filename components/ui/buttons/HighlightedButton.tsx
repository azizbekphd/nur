import ButtonBase from "./ButtonBase";
import ButtonProps from "./ButtonProps";
import styles from "./Button.module.css";

const HighlightedButton = (props: ButtonProps) => {
    return <ButtonBase {...props} buttonType={styles.highlightedButton} />
}

export default HighlightedButton;