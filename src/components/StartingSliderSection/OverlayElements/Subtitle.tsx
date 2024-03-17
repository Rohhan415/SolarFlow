import { ReactElement, JSXElementConstructor, ReactNode } from "react";
import classes from "./Subtitle.module.css";

export default function Subtitle(props: {
  children:
    | ReactElement<string, string | JSXElementConstructor<string>>
    | Iterable<ReactNode>;
}) {
  return <h2 className={classes.Container}>{props.children}</h2>;
}
