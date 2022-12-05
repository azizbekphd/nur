import { PrismaClient } from "@prisma/client";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Body, Grid, Navbar } from "../../components";
import { CourseItem } from "../../components/Courses";
import useI18n from "../../i18n";
import { CourseModel, CoursePayloadData } from "../../models";
import styles from "../../styles/Courses.module.css";

type CoursesProps = {
  courses: CourseModel[] | null | undefined;
};

const Courses: NextPage<CoursesProps> = ({ courses }: CoursesProps) => {
  const { S, formatString } = useI18n();
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
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className={styles.courseItem}
              >
                <CourseItem course={course} />
              </Link>
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
