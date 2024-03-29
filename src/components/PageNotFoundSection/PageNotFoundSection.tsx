import { NavLink } from "react-router-dom";
import styles from "./PageNotFoundSection.module.css";

function PageNotFound() {
  return (
    <>
      <div className={`${styles.PageNotFound}`}>
        <h2 className={`${styles.PageNotFound404}`}>404</h2>
        <NavLink className={`${styles.PageNotFoundBackButton}`} to="/">
          Start
        </NavLink>
      </div>
    </>
  );
}

export default PageNotFound;
