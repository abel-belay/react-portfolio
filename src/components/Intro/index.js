import { ContentWrapper, GraphicsWrapper } from "./IntroElements";
import avatarImage from "../../assets/avatar.png";
import circleTextImage from "../../assets/circle-text.png";

const Intro = () => {
  return (
    <ContentWrapper>
      <GraphicsWrapper>
        <img className="circle-text" src={circleTextImage} alt="" />
        <img className="avatar" src={avatarImage} alt="" />
      </GraphicsWrapper>
    </ContentWrapper>
    // <div className={styles.intro}>
    //   <img src={avatarImage} alt="" className={styles.avatar} />
    //   <img src={circleTextImage} alt="" className={styles["circle-text"]} />
    // </div>
  );
};

export default Intro;
