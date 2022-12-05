import { ReactNode } from "react";
import styles from "./Navbar.module.css";

const Body = ({ children }: { children: ReactNode }) => {
  return <div className={styles.body}>{children}</div>;
};

export default Body;
