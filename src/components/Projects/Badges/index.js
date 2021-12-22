import { Wrapper, Badge } from "./BadgesElements";
import mongoDBLogoPNG from "../../../assets/mongodb-logo-dark.png";
import ejsLogoPNG from "../../../assets/ejs-logo-dark.png";
import expressLogoPNG from "../../../assets/express-logo.png";

const Badges = () => {
  return (
    <Wrapper>
      <Badge>
        <img src={mongoDBLogoPNG} alt="" />
      </Badge>
      <Badge>
        <img src={ejsLogoPNG} alt="" />
      </Badge>
      <Badge>
        <img src={expressLogoPNG} alt="" />
      </Badge>
    </Wrapper>
  )
}

export default Badges;