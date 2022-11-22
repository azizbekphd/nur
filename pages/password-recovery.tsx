import type { NextPage } from "next";
import styles from "../styles/AuthPage.module.css";
import bg from "../public/images/library.jpg";
import Image from "next/image";
import { useWindowSize } from "../utils";
import { motion } from "framer-motion";
import { FilledButton, Input } from "../components";
import useI18n from "../i18n";

const PasswordRecovery: NextPage = () => {
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
          <Image
            src={"/logo.png"}
            alt={"Logo"}
            width={150}
            height={60}
            className={styles.logo}
          />
          <h1 className={styles.title}>{S.passwordRecoveryTitle}</h1>
          <p className={styles.subtitle}>{S.passwordRecoverySubtitle}</p>
          <form>
            <Input
              label={S.email}
              type="email"
              placeholder={S.emailPlaceholder}
            />
            <div className={styles.indented}>
              <FilledButton onClick={() => {}}>{S.send}</FilledButton>
            </div>
            <p className={styles.hint}>{S.weWillSendYouInstructions}</p>
          </form>
        </div>
      </motion.div>
    </main>
  );
};

export default PasswordRecovery;
