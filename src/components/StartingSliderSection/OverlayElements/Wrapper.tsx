import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import classes from "./Wrapper.module.css";

function Wrapper(props: {
  children:
    | ReactElement<string, string | JSXElementConstructor<string>>
    | Iterable<ReactNode>
    | ReactPortal;
}) {
  return <div className={classes.Container}>{props.children}</div>;
}

export default Wrapper;
