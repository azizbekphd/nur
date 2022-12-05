import { PrismaClient } from "@prisma/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Body, Navbar } from "../../components";
import useI18n from "../../i18n";
import { CourseModel, CoursePayloadData } from "../../models";
import fromLocaleString from "../../utils/fromLocaleString";
import styles from "../../styles/CourseDetails.module.css";

type CourseDetailsProps = {
  course: CourseModel;
};

const CourseDetails: NextPage<CourseDetailsProps> = ({ course }) => {
  const { S, formatString, locale } = useI18n();

  return (
    <>
      <Head>
        <title>{formatString(S.title, course?.name)}</title>
      </Head>
      <Navbar />
      <Body>
        <div className={styles.wrapper}>
          <Image
            src={course.image!}
            alt={fromLocaleString(course.name.value, locale)}
            width={400}
            height={400}
            className={styles.image}
          />
          <div className={styles.info}>
            <h1>{fromLocaleString(course.name.value, locale)}</h1>
            <p>{fromLocaleString(course.description.value, locale)}</p>
          </div>
        </div>
      </Body>
    </>
  );
};

type CourseDetailsUrlQuery = {
  id: string;
};

export const getStaticProps: GetStaticProps<
  CourseDetailsProps,
  CourseDetailsUrlQuery
> = async (ctx) => {
  const prisma = new PrismaClient();

  console.log(ctx.params);

  const course = await prisma.course.findUnique({
    where: { id: ctx.params?.id },
    ...CoursePayloadData,
  });

  if (!course) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      course: course,
    },
  };
};

export const getStaticPaths: GetStaticPaths<CourseDetailsUrlQuery> = async (
  ctx
) => {
  const prisma = new PrismaClient();
  const courses = await prisma.course.findMany();

  return {
    paths: courses.map((course) => {
      return {
        params: {
          id: course.id,
        } as CourseDetailsUrlQuery,
      };
    }),
    fallback: false,
  };
};

export default CourseDetails;
