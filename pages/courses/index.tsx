import { PrismaClient } from "@prisma/client";
import { motion } from "framer-motion";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Body, Grid, Navbar } from "../../components";
import { CourseItem } from "../../components/Courses";
import useI18n from "../../i18n";
import MotionVariants from "../../lib/MotionVariants";
import { CourseModel, CoursePayloadData } from "../../models";
import styles from "../../styles/Courses.module.css";

type CoursesProps = {
  courses: CourseModel[] | null | undefined;
};

const Courses: NextPage<CoursesProps> = ({ courses }: CoursesProps) => {
  const { S, formatString } = useI18n();
  const MotionLink = motion(Link);
  
  return (
    <>
      <Head>
        <title>{formatString(S.title, S.courses)}</title>
      </Head>
      <main>
        <Navbar />
        <Body>
          <Grid>
            {courses?.map((course) => (
              <MotionLink
                key={course.id}
                variants={MotionVariants.gridItem}
                href={`/courses/${course.id}`}
                className={styles.courseItem}
              >
                <CourseItem course={course} />
              </MotionLink>
            ))}
          </Grid>
        </Body>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<CoursesProps> = async (
  context
) => {
  const prisma = new PrismaClient();
  return {
    props: {
      courses: await prisma.course.findMany(CoursePayloadData),
    },
  };
};

export default Courses;
