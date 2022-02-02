import { Section, ContentWrapper, Button } from "./ProjectsElements";
import Project from "./Project";
import sampleWebsitePNG from "../../assets/sample-website.png";
import convoScreenshot1PNG from "../../assets/convo-screenshot-1.png";
import mightDrawScreenshotPNG from "../../assets/mighty-draw-screenshot-1.png";
import hairScreenshot1PNG from "../../assets/hair-screenshot-1.png";

const Projects = () => {
  const projects = [
    {
      name: "Convo",
      description:
        "YelpCamp is a campsite sharing platform where users can search, share, and review their favourite campsites. Built with EJS, Express, NodeJS, and MongoDB.",
      images: [convoScreenshot1PNG],
      href: "https://convo-talk.herokuapp.com",
    },
    {
      name: "Mighty Draw",
      description:
        "Mighty Draw is an online drawing application that was built in one week for the Mintbean 2021 November Hackathon and was rewarded as being within the top 10% of projects.",
      images: [mightDrawScreenshotPNG],
      href: "https://mighty-draw.netlify.app",
    },
    {
      name: "YelpCamp",
      description:
        "YelpCamp is a campsite sharing platform where users can search, share, and review their favourite campsites. Built with EJS, Express, NodeJS, and MongoDB.",
      images: [sampleWebsitePNG],
      href: "https://protected-depths-19609.herokuapp.com",
    },
    {
      name: "HAIRR",
      description:
        "YelpCamp is a campsite sharing platform where users can search, share, and review their favourite campsites. Built with EJS, Express, NodeJS, and MongoDB.",
      images: [hairScreenshot1PNG],
      href: "https://hairr-app.herokuapp.com",
    },
  ];

  const projectComponents = projects.map((project, i) => (
    <Project key={"project-card-" + i} {...project} />
  ));

  return (
    <Section>
      <ContentWrapper>{projectComponents}</ContentWrapper>
      <Button>See More Work</Button>
    </Section>
  );
};

export default Projects;
