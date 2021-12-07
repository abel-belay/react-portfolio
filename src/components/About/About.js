import styles from "./About.module.css";
import { ContentWrapper, Header, Description } from "./AboutElements";

const About = () => {
  return (
    <div className={styles.about}>
      <hr className={styles["top-rule"]} />
      <ContentWrapper>
        <Header>
          <h2>About Me</h2>
        </Header>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Description>
      </ContentWrapper>
    </div>
  );
};

export default About;
