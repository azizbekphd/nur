import styles from "./LanguageToggler.module.css";
import { SlGlobe } from "react-icons/sl";

type LanguageTogglerProps = {
    size: number;
}

const LanguageToggler = ({ size }: LanguageTogglerProps) => {
    return <div className={styles.wrapper}>
        <div className={styles.button}>
            <SlGlobe size={size} />
        </div>
    </div>
}

export default LanguageToggler;