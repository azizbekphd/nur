import { PrismaClient } from "@prisma/client";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Body, Grid, Navbar } from "../../components";
import { TeacherItem } from "../../components/Teachers";
import useI18n from "../../i18n";
import { TeacherModel, TeacherPayloadData } from "../../models";
import styles from "../../styles/Teachers.module.css";

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
      <main>
        <Navbar />
        <Body>
          <Grid>
            {teachers?.map((teacher) => (
              <Link
                key={teacher.id}
                href={`/teachers/${teacher.id}`}
                className={styles.teacherItem}
              >
                <TeacherItem teacher={teacher} />
              </Link>
            ))}
          </Grid>
        </Body>
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
