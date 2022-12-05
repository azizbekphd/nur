import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components";
import useI18n from "../../i18n";
import styles from "../styles/Courses.module.css";

const Courses: NextPage = () => {
    const { S, formatString } = useI18n();
  return (
    <>
      <Head>
        <title>{formatString(S.title, S.courses)}</title>
      </Head>
      <Navbar />
      <main>
        
      </main>
    </>
  );
};

export default Courses;
