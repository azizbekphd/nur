import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components";
import useI18n from "../i18n";
import styles from "../styles/Teachers.module.css";

const Teachers: NextPage = () => {
    const { S, formatString } = useI18n();
  return (
    <>
      <Head>
        <title>{formatString(S.title, S.teachers)}</title>
      </Head>
      <Navbar />
      <main>
        
      </main>
    </>
  );
};

export default Teachers;
