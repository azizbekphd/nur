import { PrismaClient } from "@prisma/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Body, Navbar } from "../../components";
import useI18n from "../../i18n";
import { TeacherModel, TeacherPayloadData } from "../../models";
import fromLocaleString from "../../utils/fromLocaleString";
import styles from "../../styles/TeacherDetails.module.css";

type TeacherDetailsProps = {
  teacher: TeacherModel;
};

const TeacherDetails: NextPage<TeacherDetailsProps> = ({ teacher }) => {
  const { S, formatString, locale } = useI18n();

  return (
    <>
      <Head>
        <title>{formatString(S.title, teacher?.name)}</title>
      </Head>
      <Navbar />
      <Body>
        <div className={styles.wrapper}>
          <Image
            src={teacher.image}
            alt={fromLocaleString(teacher.name.value, locale)}
            width={400}
            height={400}
            className={styles.image}
          />
          <div className={styles.info}>
            <h1>{fromLocaleString(teacher.name.value, locale)}</h1>
            <h3>{fromLocaleString(teacher.role.value, locale)}</h3>
            <p>{fromLocaleString(teacher.bio.value, locale)}</p>
          </div>
        </div>
      </Body>
    </>
  );
};

type TeacherDetailsUrlQuery = {
  id: string;
};

export const getStaticProps: GetStaticProps<
  TeacherDetailsProps,
  TeacherDetailsUrlQuery
> = async (ctx) => {
  const prisma = new PrismaClient();

  console.log(ctx.params);

  const teacher = await prisma.teacher.findUnique({
    where: { id: ctx.params?.id },
    ...TeacherPayloadData,
  });

  if (!teacher) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      teacher: teacher,
    },
  };
};

export const getStaticPaths: GetStaticPaths<TeacherDetailsUrlQuery> = async (
  ctx
) => {
  const prisma = new PrismaClient();
  const teachers = await prisma.teacher.findMany();

  return {
    paths: teachers.map((teacher) => {
      return {
        params: {
          id: teacher.id,
        } as TeacherDetailsUrlQuery,
      };
    }),
    fallback: false,
  };
};

export default TeacherDetails;
