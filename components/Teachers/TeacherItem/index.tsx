import { PrismaClient, Prisma } from "@prisma/client";
import Image from "next/image";
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
    <div className={styles.wrapper}>
      <Image
        src={teacher.image}
        alt={fromLocaleString(teacher.name.value, locale)}
        width={200}
        height={200}
        className={styles.image}
      />
      <h3 className={styles.name}>{fromLocaleString(teacher.name.value, locale)}</h3>
      <hr className={styles.divider} />
      <p className={styles.role}>{fromLocaleString(teacher.role.value, locale)}</p>
    </div>
  );
};

export default TeacherItem;
