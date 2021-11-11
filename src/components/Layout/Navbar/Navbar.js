import styles from "./Navbar.module.css";

const Navbar = () => {
  return <div className={styles.navbar}>
    <div className={styles.content}>
      <h3>ABEL BELAY</h3>
      <ul>
        <li><a href="/">About</a></li>
        <li><a href="/">Works</a></li>
        <li><a href="/">Resume</a></li>
      </ul>
    </div>
  </div>;
};

export default Navbar;
