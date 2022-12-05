import { PrismaClient } from "@prisma/client";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Grid, Navbar } from "../components";
import { TeacherItem } from "../components/Teachers";
import useI18n from "../i18n";
import { TeacherModel, TeacherPayloadData } from "../models";
import styles from "../styles/Teachers.module.css";

type TeachersProps = {
  teachers: TeacherModel[] | null | undefined;
};

const Teachers: NextPage<TeachersProps> = ({ teachers }: TeachersProps) => {
  const { S, formatString } = useI18n();
  return (
    <>
      <Head>
        <title>{formatString(S.title, S.teachers)}</title>
      </Head>
      <Navbar />
      <main>
        <Grid>
          {teachers?.map((teacher) => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))}
        </Grid>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<TeachersProps> = async (
  context
) => {
  const prisma = new PrismaClient();
  return {
    props: {
      teachers: await prisma.teacher.findMany(TeacherPayloadData),
    },
  };
};

export default Teachers;
