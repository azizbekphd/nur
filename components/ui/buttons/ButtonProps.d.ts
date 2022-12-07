import { ReactNode, MouseEvent } from "react";

type ButtonProps = {
    children: ReactNode;
    disabled?: boolean;
} & ({onClick: (e?: MouseEvent<HTMLElement>) => void; href?: never} | {href: string; onClick?: never});

export default ButtonProps;