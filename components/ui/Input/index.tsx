import { HTMLProps, useState } from "react";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
} & HTMLProps<HTMLInputElement>;

const Input = ({ label, ...props }: InputProps) => {
  const [show, setShow] = useState<boolean>(false);

  const password = props.type === "password";

  return (
    <div className={styles.wrapper}>
      <label className={styles.labelWrapper}>
        <span className={styles.label}>{label}</span>
        <input
          className={styles.input}
          {...props}
          type={password ? (show ? "text" : "password") : props.type}
        />
        {/* {password ? (
          <span className={styles.show}>{show ? "Hide" : "Show"}</span>
        ) : (
          <></>
        )} */}
      </label>
    </div>
  );
};

export default Input;
