import Image from "next/image";
import { useState } from "react";
import { HighlightedButton, LanguageToggler, TextButton } from "..";
import useI18n from "../../../i18n";
import { classNames } from "../../../utils";
import styles from "./Navbar.module.css";

type NavbarProps = {
  logo?: boolean;
  signedIn?: boolean;
};

const Navbar = ({ logo = true, signedIn }: NavbarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { S } = useI18n();

  return (
    <nav
      className={classNames([styles.wrapper, open && styles.open])}
      onClick={() => {
        setOpen(false);
      }}
    >
      {logo ? (
        <Image
          src={"/logo.png"}
          alt="Nur"
          width={100}
          height={50}
          className={styles.logo}
        />
      ) : (
        <></>
      )}

      <div className={styles.buttons}>
        <button
          className={styles.toggler}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* <LanguageToggler size={19} /> */}
      </div>

      <ul className={styles.content}>
        {[
          { title: S.courses, href: "/courses" },
          { title: S.teachers, href: "/teachers" },
          { title: S.aboutUs, href: "/about" },
        ].map((item: { title: string; href: string }, i) => (
          <li key={i.toString()}>
            <TextButton href={item.href}>{item.title}</TextButton>
          </li>
        ))}
        <li className={styles.space}></li>
        {signedIn ? (
          <></>
        ) : (
          <li className={styles.trailing}>
            <HighlightedButton href="/signin">{S.signIn}</HighlightedButton>
            <TextButton href="/signup">{S.signUp}</TextButton>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
