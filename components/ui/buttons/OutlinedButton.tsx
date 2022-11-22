import ButtonBase from "./ButtonBase";
import ButtonProps from "./ButtonProps";
import styles from "./Button.module.css";

const OutlinedButton = (props: ButtonProps) => {
    return <ButtonBase {...props} buttonType={styles.outlinedButton} />
}

export default OutlinedButton;