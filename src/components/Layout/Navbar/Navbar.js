import styles from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";
import resumePDF from "../../../assets/resume.pdf";


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <HashLink smooth to="/#intro-section">
          <h3>ABEL BELAY</h3>
        </HashLink>
        <ul>
          <li>
            <HashLink smooth to="/#about-section">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects-section">
              Works
            </HashLink>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={resumePDF}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
