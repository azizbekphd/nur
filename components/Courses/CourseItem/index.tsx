import Image from "next/image";
import useI18n from "../../../i18n";
import { CourseModel } from "../../../models";
import fromLocaleString from "../../../utils/fromLocaleString";
import styles from "./CourseItem.module.css";

type CourseItemProps = {
  course: CourseModel;
};

const CourseItem = ({ course }: CourseItemProps) => {
  const { S, locale } = useI18n();

  return (
    <div className={styles.wrapper}>
      <Image
        src={course.image ?? "/images/courses/placeholder.jpg"}
        alt={fromLocaleString(course.name.value, locale)}
        width={300}
        height={200}
        className={styles.image}
      />
      <div>
        <h3 className={styles.name}>
          {fromLocaleString(course?.name.value, locale)}
        </h3>
        <p className={styles.description}>
          {fromLocaleString(course?.description.value, locale)}
        </p>
      </div>
    </div>
  );
};

export default CourseItem;
