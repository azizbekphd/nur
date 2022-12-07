import type { NextPage } from "next";
import styles from "../styles/AuthPage.module.css";
import bg from "../public/images/library.jpg";
import Image from "next/image";
import { classNames } from "../utils";
import { useAuthSession, useWindowSize } from "../hooks";
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
import Head from "next/head";
import { FormEvent, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import getLocalizedError from "../lib/LocalizedError";
import { AuthResponse } from "@supabase/supabase-js";

const SignUp: NextPage = () => {
  const windowSize = useWindowSize();
  const { S, formatString, locale } = useI18n();
  const supabase = useSupabaseClient();

  const [data, setData] = useState<{
    email: string;
    password: string;
    options: {
      data: {
        name: string;
        lastName: string;
        birthdate: string;
        rememberMe: boolean;
      };
    };
  }>({
    email: "",
    password: "",
    options: {
      data: {
        name: "",
        lastName: "",
        birthdate: "",
        rememberMe: true,
      },
    },
  });

  const [status, setStatus] = useState<AuthResponse>();
  const { session, hasMetadata } = useAuthSession();

  return (
    <>
      <Head>
        <title>{formatString(S.title, S.signUp)}</title>
      </Head>
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
            {status ? (
              <p
                className={classNames(
                  styles.statusLog,
                  (status?.error ?? false) && styles.error
                )}
              >
                {status?.error
                  ? getLocalizedError(status.error.name, locale).message
                  : S.loading}
              </p>
            ) : (
              <></>
            )}
            <form>
              {hasMetadata ? (
                <>
                  <Input
                    label={S.email}
                    type="email"
                    placeholder={S.emailPlaceholder}
                    value={data.email}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                      setData({
                        ...data,
                        email: e.currentTarget.value,
                      });
                    }}
                  />
                  <Input
                    label={S.password}
                    type="password"
                    placeholder={S.passwordPlaceholder}
                    value={data.password}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                      setData({
                        ...data,
                        password: e.currentTarget.value,
                      });
                    }}
                  />
                  <div className={classNames(styles.row, styles.indented)}>
                    <Checkbox
                      label={formatString(S.rememberForNDays, 30)}
                      checked={data.options.data.rememberMe}
                      onChange={(e: FormEvent<HTMLInputElement>) => {
                        setData({
                          ...data,
                          options: {
                            data: {
                              ...data.options.data,
                              rememberMe: e.currentTarget.checked,
                            },
                          },
                        });
                      }}
                    />
                    <TextLink href={"/password-recovery"}>
                      {S.forgotPassword}
                    </TextLink>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.row}>
                    <Input
                      label={S.name}
                      placeholder={S.namePlaceholder}
                      value={data.options.data.name}
                      onChange={(e: FormEvent<HTMLInputElement>) => {
                        setData({
                          ...data,
                          options: {
                            data: {
                              ...data.options.data,
                              name: e.currentTarget.value,
                            },
                          },
                        });
                      }}
                    />
                    <Input
                      label={S.lastName}
                      placeholder={S.lastNamePlaceholder}
                      value={data.options.data.lastName}
                      onChange={(e: FormEvent<HTMLInputElement>) => {
                        setData({
                          ...data,
                          options: {
                            data: {
                              ...data.options.data,
                              lastName: e.currentTarget.value,
                            },
                          },
                        });
                      }}
                    />
                  </div>
                  <Input
                    label={S.birthdate}
                    type="date"
                    max={new Date().toISOString().split("T")[0]}
                    min="1900-01-01"
                    value={data.options.data.birthdate}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                      setData({
                        ...data,
                        options: {
                          data: {
                            ...data.options.data,
                            birthdate: e.currentTarget.value,
                          },
                        },
                      });
                    }}
                  />
                </>
              )}
              <div className={styles.indented}>
                <FilledButton
                  onClick={() => {
                    setStatus({
                      data: {
                        user: null,
                        session: null,
                      },
                      error: null,
                    });
                    if(session === null || !hasMetadata){
                      supabase.auth.signUp(data).then((response) => {
                        setStatus(response.error !== null ? response : undefined);
                      });
                    } else {
                      supabase.auth.updateUser({
                        data: data.options.data,
                      });
                    }
                  }}
                >
                  {hasMetadata ? S.next : S.signUp}
                </FilledButton>
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
              <p className={classNames(styles.hint, styles.indented)}>
                {S.dontHaveAnAccount}{" "}
                <TextLink href="/signin">{S.signIn}</TextLink>
              </p>
            </form>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default SignUp;
