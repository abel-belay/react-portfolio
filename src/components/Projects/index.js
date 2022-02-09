import { Section, ContentWrapper } from "./ProjectsElements";
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
        "Convo is a web-based messaging application, allowing to message your friends whether you're on desktop or mobile. Built using the MERN stack.",
      images: [convoScreenshot1PNG],
      href: "https://convo-talk.herokuapp.com",
      technologies: ["react", "express", "mongoDB"],
    },
    {
      name: "Mighty Draw",
      description:
        "Mighty Draw is an online drawing application that was built in one week for the Mintbean 2021 November Hackathon and was rewarded as being within the top 10% of projects.",
      images: [mightDrawScreenshotPNG],
      href: "https://mighty-draw.netlify.app",
      technologies: ["react"],
    },
    {
      name: "YelpCamp",
      description:
        "YelpCamp is a campsite sharing platform where users can search, share, and review their favourite campsites. Built with EJS, Express, NodeJS, and MongoDB.",
      images: [sampleWebsitePNG],
      href: "https://protected-depths-19609.herokuapp.com",
      technologies: ["ejs", "express", "mongoDB"],
    },
    {
      name: "HAIRR",
      description:
        "HAIRR is an online directory for hair salons. Business owners can post their businesses and users can find and review these salons. Built using MERN stack.",
      images: [hairScreenshot1PNG],
      href: "https://hairr-app.herokuapp.com",
      technologies: ["react", "express", "mongoDB"],
    },
  ];

  const projectComponents = projects.map((project, i) => (
    <Project key={"project-card-" + i} {...project} />
  ));

  return (
    <Section id="projects-section">
      <ContentWrapper>{projectComponents}</ContentWrapper>
      {/* <Button>See More Work</Button> */}
    </Section>
  );
};

export default Projects;
