import { HTMLProps } from "react";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
    label?: string;
} & HTMLProps<HTMLInputElement>;

const Checkbox = ({label, ...props}: CheckboxProps) => {
    return <div className={styles.wrapper}>
        <label className={styles.labelWrapper}>
            <input type="checkbox" className={styles.checkbox} {...props}/>
            <div className={styles.checkmark}>
                <span></span>
            </div>
            <span className={styles.label}>{label}</span>
        </label>
    </div>
}

export default Checkbox;