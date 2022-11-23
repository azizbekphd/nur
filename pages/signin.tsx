import type { NextPage } from "next";
import styles from "../styles/AuthPage.module.css";
import bg from "../public/images/library.jpg";
import Image from "next/image";
import { classNames, useWindowSize } from "../utils";
import { motion } from "framer-motion";
import {
  Checkbox,
  FilledButton,
  Input,
  LanguageToggler,
  OutlinedButton,
  TextLink,
} from "../components";
import useI18n from "../i18n";

const SignIn: NextPage = () => {
  const windowSize = useWindowSize();
  const { S, formatString } = useI18n();

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
          <div className={styles.languageTogglerWrapper}>
            <LanguageToggler />
          </div>
          <Image
            src={"/logo.png"}
            alt={"Logo"}
            width={150}
            height={60}
            className={styles.logo}
          />
          <h1 className={styles.title}>{S.signInTitle}</h1>
          <p className={styles.subtitle}>
            {S.signInSubtitle}
          </p>
          <form>
            <Input
              label={S.email}
              type="email"
              placeholder={S.emailPlaceholder}
            />
            <Input
              label={S.password}
              type="password"
              placeholder={S.emailPlaceholder}
            />
            <div className={classNames(styles.row, styles.indented)}>
              <Checkbox label={formatString(S.rememberForNDays, 30)} />
              <TextLink href={"/password-recovery"}>
                {S.forgotPassword}
              </TextLink>
            </div>
            <div className={styles.indented}>
              <FilledButton onClick={() => {}}>{S.signIn}</FilledButton>
              <OutlinedButton onClick={() => {}}>
                <Image
                  src={"/images/google-g.svg"}
                  width={24}
                  height={24}
                  alt={"Google logo"}
                  className={styles.googleLogo}
                />
                {formatString(S.signInWith, "Google")}
              </OutlinedButton>
            </div>
            <p className={classNames(styles.hint, styles.indented)}>
              {S.dontHaveAnAccount}{" "}
              <TextLink href="/signup">{S.signUp}</TextLink>
            </p>
          </form>
        </div>
      </motion.div>
    </main>
  );
};

export default SignIn;
