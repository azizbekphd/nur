import { motion } from "framer-motion";
import { ReactNode } from "react";
import MotionVariants from "../../../lib/MotionVariants";
import styles from "./Grid.module.css";

type GridProps = {
  children: ReactNode;
};

const Grid = ({ children }: GridProps) => {
  return (
    <motion.div
      className={styles.wrapper}
      variants={MotionVariants.grid}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default Grid;
