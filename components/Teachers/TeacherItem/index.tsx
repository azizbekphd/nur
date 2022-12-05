import { PrismaClient, Prisma } from "@prisma/client";
import useI18n from "../../../i18n";
import { TeacherModel } from "../../../models";
import fromLocaleString from "../../../utils/fromLocaleString";
import { PromiseView } from "../../ui";
import styles from "./TeacherItem.module.css";

type TeacherItemProps = {
  teacher: TeacherModel;
};

const TeacherItem = ({ teacher }: TeacherItemProps) => {
  const { S, locale } = useI18n();

  return (
    <>
      <h1>{fromLocaleString(teacher.name.value, locale)}</h1>
    </>
  );
};

export default TeacherItem;
