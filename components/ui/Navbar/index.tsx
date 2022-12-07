import { Session, useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HighlightedButton, LanguageToggler, TextButton, ProfileMenu } from "..";
import useI18n from "../../../i18n";
import { classNames } from "../../../utils";
import styles from "./Navbar.module.css";

type NavbarProps = {
  logo?: boolean;
};

const Navbar = ({ logo = true, }: NavbarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const supabase = useSupabaseClient();
  const { S, asPath } = useI18n();
  const [session, setSession] = useState<Session | null>()

  useEffect(()=>{
    supabase.auth.getSession().then((session)=>{
      setSession(session.data.session)
    })
  },[])

  return (
    <nav
      className={classNames(styles.wrapper, open && styles.open)}
      onClick={() => {
        setOpen(false);
      }}
    >
      {logo ? (
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Nur"
            width={100}
            height={50}
            className={styles.logo}
          />
        </Link>
      ) : (
        <></>
      )}

      <ul className={styles.content}>
        {[
          { title: S.courses, href: "/courses" },
          { title: S.teachers, href: "/teachers" },
          { title: S.aboutUs, href: "/about" },
        ].map((item: { title: string; href: string }, i) => (
          <li key={i.toString()} className={classNames(asPath.startsWith(item.href) && styles.active)}>
            <TextButton href={item.href}>{item.title}</TextButton>
          </li>
        ))}
        <li className={styles.space}></li>
        <li className={styles.trailing}>
        {session ? (
          <ProfileMenu />
        ) : (
          <>
            <HighlightedButton href="/signin">{S.signIn}</HighlightedButton>
            <TextButton href="/signup">{S.signUp}</TextButton>
          </>
        )}
        </li>
      </ul>
      
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

        <LanguageToggler size={19} />
      </div>
    </nav>
  );
};

export default Navbar;
