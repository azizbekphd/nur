import type { NextPage } from "next";
import styles from "../styles/AuthPage.module.css";
import bg from "../public/images/library.jpg";
import Image from "next/image";
import { useWindowSize } from "../utils";
import { motion } from "framer-motion";
import {
  Checkbox,
  FilledButton,
  Input,
  OutlinedButton,
  TextLink,
} from "../components";

const SignUp: NextPage = () => {
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
      <motion.div
        className={styles.contentWrapper}
        initial={{ translateX: 200, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.7,
        }}
      >
        <div className={styles.content}>
          <Image
            src={"/logo.png"}
            alt={"Logo"}
            width={150}
            height={60}
            className={styles.logo}
          />
          <h1 className={styles.title}>Create a new account</h1>
          <p className={styles.subtitle}>Welcome! Please, enter your details</p>
          <form>
            <Input
              label={"Email"}
              type="email"
              placeholder={"Enter your email"}
            />
            <div className={styles.row}>
              <Input label={"Name"} placeholder={"John"} />
              <Input label={"Last name"} placeholder={"Doe"} />
            </div>
            <Input
              label={"Password"}
              type="password"
              placeholder={"Enter your password"}
            />
            <FilledButton onClick={() => {}}>Sign up</FilledButton>
            <OutlinedButton onClick={() => {}}>
              <Image
                src={"/images/google-g.svg"}
                width={24}
                height={24}
                alt={"Google logo"}
                className={styles.googleLogo}
              />
              Sign up with Google
            </OutlinedButton>
            <p className={styles.hint}>
              Already have an account?{" "}
              <TextLink href="/signin">Sign in</TextLink>
            </p>
          </form>
        </div>
      </motion.div>
    </main>
  );
};

export default SignUp;
