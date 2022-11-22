import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import styles from "./TextLink.module.css";

type TextLinkProps = {
    children: ReactNode;
} & LinkProps;

const TextLink = ({children, ...props}: TextLinkProps) => {
    return <Link className={styles.textLink} {...props}>
        {children}
    </Link>
}

export default TextLink;