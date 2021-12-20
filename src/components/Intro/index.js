import { Section, ContentWrapper } from "./IntroElements";
import avatarImage from "../../assets/avatar.png";
import circleTextImage from "../../assets/circle-text.png";

const Intro = () => {
  return (
    <Section>
      <ContentWrapper>
        <img className="circle-text" src={circleTextImage} alt="" />
        <img className="avatar" src={avatarImage} alt="" />
      </ContentWrapper>
    </Section>
    // <div className={styles.intro}>
    //   <img src={avatarImage} alt="" className={styles.avatar} />
    //   <img src={circleTextImage} alt="" className={styles["circle-text"]} />
    // </div>
  );
};

export default Intro;
