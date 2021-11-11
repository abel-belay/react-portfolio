import styles from "./Intro.module.css";
import avatarImage from "../../assets/avatar.png";
import circleTextImage from "../../assets/circle-text.png";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <img src={avatarImage} alt="" className={styles.avatar} />
      <img src={circleTextImage} alt="" className={styles["circle-text"]} />
    </div>
  );
};

export default Intro;