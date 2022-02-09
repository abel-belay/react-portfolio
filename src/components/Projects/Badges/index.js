import { Wrapper, Badge } from "./BadgesElements";
import mongoDB from "../../../assets/mongodb-logo.png";
import ejs from "../../../assets/ejs-logo-dark.png";
import express from "../../../assets/express-logo.png";
import react from "../../../assets/react-logo.png";

const Badges = (props) => {
  const badges = props.technologies.map((technology, i) => {
    let logo = null;
    switch (technology) {
      case "react":
        logo = react;
        break;
      case "ejs":
        logo = ejs;
        break;
      case "mongoDB":
        logo = mongoDB;
        break;
      case "express":
        logo = express;
        break;
      default:
        logo = express;
    }
    return (
      <Badge key={"badge-" + i}>
        <img src={logo} alt="" />
      </Badge>
    );
  });

  return <Wrapper>{badges}</Wrapper>;
};

export default Badges;
