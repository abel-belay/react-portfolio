import { Card, ImageWrapper, DescriptionWrapper } from "./ProjectElements";
import Badges from "../Badges";

const Project = (props) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={props.images[0]} alt="" />
        <Badges />
      </ImageWrapper>
      <DescriptionWrapper>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </DescriptionWrapper>
    </Card>
  );
};

export default Project;
