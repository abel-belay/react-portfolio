import { Card, ImageWrapper } from "./ProjectElements";
import sampleWebsitePNG from "../../../assets/sample-website.png";

const Project = () => {
  return (
    <Card>
      <ImageWrapper>
        <img src={sampleWebsitePNG} alt="" />
      </ImageWrapper>
    </Card>
  );
};

export default Project;
