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
  LanguageToggler,
  OutlinedButton,
  TextLink,
} from "../components";
import useI18n from "../i18n";

const SignUp: NextPage = () => {
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
          <h1 className={styles.title}>{S.signUpTitle}</h1>
          <p className={styles.subtitle}>{S.signUpSubtitle}</p>
          <form>
            <Input
              label={S.email}
              type="email"
              placeholder={S.emailPlaceholder}
            />
            <div className={styles.row}>
              <Input label={S.name} placeholder={S.namePlaceholder} />
              <Input label={S.lastName} placeholder={S.lastNamePlaceholder} />
            </div>
            <Input
              label={S.password}
              type="password"
              placeholder={S.passwordPlaceholder}
            />
            <div className={styles.indented}>
              <FilledButton onClick={() => {}}>{S.signUp}</FilledButton>
              <OutlinedButton onClick={() => {}}>
                <Image
                  src={"/images/google-g.svg"}
                  width={24}
                  height={24}
                  alt={"Google logo"}
                  className={styles.googleLogo}
                />
                {formatString(S.signUpWith, "Google")}
              </OutlinedButton>
            </div>
            <p className={styles.hint}>
              {S.alreadyHaveAnAccount}{" "}
              <TextLink href="/signin">{S.signIn}</TextLink>
            </p>
          </form>
        </div>
      </motion.div>
    </main>
  );
};

export default SignUp;
