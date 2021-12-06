import styles from "./About.module.css";
import { ContentWrapper, Header } from "./AboutElements";

const About = () => {
  return (
    <div className={styles.about}>
      <hr className={styles["top-rule"]} />
      <ContentWrapper>
        <Header>
          <h2>About Me</h2>
        </Header>
      </ContentWrapper>
    </div>
  );
};

export default About;
