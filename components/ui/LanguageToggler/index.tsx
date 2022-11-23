import styles from "./LanguageToggler.module.css";
import { SlGlobe } from "react-icons/sl";
import { i18n } from "../../../next.config";
import Link from "next/link";
import { classNames } from "../../../utils";
import useI18n from "../../../i18n";

type LanguageTogglerProps = {
  size?: number;
};

const LanguageToggler = ({ size = 19 }: LanguageTogglerProps) => {
  const { locale, asPath } = useI18n();

  return (
    <div
      className={styles.wrapper}
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        console.log(e);
      }}
    >
      <div className={styles.button}>
        <SlGlobe size={size} color={"var(--text-color)"} />
      </div>
      <ul className={styles.list}>
        {i18n?.locales.map((l) => (
          <li key={l}>
            <Link href={asPath} locale={l} className={classNames(l === locale)}>
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageToggler;
