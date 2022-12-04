import ButtonBase from "./ButtonBase";
import ButtonProps from "./ButtonProps";
import styles from "./Button.module.css";

const CleanButton = (props: ButtonProps) => {
    return <ButtonBase {...props} buttonType={styles.cleanButton} />
}

export default CleanButton;
