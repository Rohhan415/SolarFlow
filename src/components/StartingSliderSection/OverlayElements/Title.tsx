import { ReactNode, ReactPortal } from "react";
import classes from "./Title.module.css";

export default function Title(props: {
  children:
    | string
    | number
    | boolean
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  return <h1 className={classes.Container}>{props.children}</h1>;
}
