import { PrismaClient } from "@prisma/client";
import { motion } from "framer-motion";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Body, Grid, Navbar } from "../../components";
import { TeacherItem } from "../../components/Teachers";
import useI18n from "../../i18n";
import MotionVariants from "../../lib/MotionVariants";
import { TeacherModel, TeacherPayloadData } from "../../models";
import styles from "../../styles/Teachers.module.css";

type TeachersProps = {
  teachers: TeacherModel[] | null | undefined;
};

const Teachers: NextPage<TeachersProps> = ({ teachers }: TeachersProps) => {
  const { S, formatString } = useI18n();
  const MotionLink = motion(Link);

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
              <MotionLink
                key={teacher.id}
                variants={MotionVariants.gridItem}
                href={`/teachers/${teacher.id}`}
                className={styles.teacherItem}
              >
                <TeacherItem teacher={teacher} />
              </MotionLink>
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
