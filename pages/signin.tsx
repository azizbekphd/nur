import type { NextPage } from "next";
import styles from "../styles/SignIn.module.css";
import bg from "../public/images/library.jpg";
import Image from "next/image";
import { useWindowSize } from "../utils";

const SignIn: NextPage = () => {
  const windowSize = useWindowSize();

  return (
    <main className={styles.page}>
      <Image
        src={bg.src}
        width={windowSize?.width ?? 0}
        height={windowSize?.height ?? 0}
        alt={"Library"}
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
        <Image
          src={"/logo.png"}
          alt={"Logo"}
          width={150}
          height={60}
          className={styles.logo}
        />
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>Welcome back! Please, enter your details</p>
      </div>
    </main>
  );
};

export default SignIn;
