import Image from "next/image";
import { useState } from "react";
import { HighlightedButton, TextButton } from "..";
import { classNames } from "../../../utils";
import styles from "./Navbar.module.css";

type NavbarProps = {
  logo?: boolean;
  signedIn?: boolean;
};

const Navbar = ({ logo = true, signedIn }: NavbarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className={classNames([styles.wrapper, open && styles.open])} onClick={()=>{setOpen(false)}}>
      {logo ? (
        <Image
          src={"/logo.png"}
          alt="Nur"
          width={150}
          height={50}
          className={styles.logo}
        />
      ) : (
        <></>
      )}
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
      <ul className={styles.content}>
        <div className={styles.space}></div>
        {signedIn ? (
          <></>
        ) : (
          <div className={styles.trailing}>
            <HighlightedButton href="/signin">Sign in</HighlightedButton>
            <TextButton href="/signup">Sign up</TextButton>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
