import { ReactNode, MouseEvent } from "react";

type ButtonProps = {
    children: ReactNode;
} & ({onClick: (e?: MouseEvent<HTMLElement>) => void; href?: never} | {href: string; onClick?: never});

export default ButtonProps;