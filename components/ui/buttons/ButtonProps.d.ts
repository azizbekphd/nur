import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
} & ({onClick: () => void; href?: never} | {href: string; onClick?: never});

export default ButtonProps;