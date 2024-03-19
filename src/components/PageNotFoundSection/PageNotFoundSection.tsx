import { NavLink } from "react-router-dom";
import styles from "./PageNotFoundSection.module.css";

function PageNotFound() {
  return (
    <>
      <div className={`${styles.PageNotFound}`}>
        <h2 className={`${styles.PageNotFound404}`}>404</h2>
        <div className={`${styles.PageNotFoundBackButton}`}>
          <NavLink to="/">Start</NavLink>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
