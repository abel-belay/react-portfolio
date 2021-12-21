import { Card, ImageWrapper, DescriptionWrapper } from "./ProjectElements";
import Badges from "../Badges";
import sampleWebsitePNG from "../../../assets/sample-website.png";

const Project = () => {
  return (
    <Card>
      <ImageWrapper>
        <img src={sampleWebsitePNG} alt="" />
      </ImageWrapper>
      <Badges />
      <DescriptionWrapper>
        <h3>YelpCamp</h3>
        <p>YelpCamp is a campsite sharing platform where users can search, share, and review their favourite campsites. Built with EJS, Express, NodeJS, and MongoDB.</p>
      </DescriptionWrapper>
    </Card>
  );
};

export default Project;
