import { Section, ContentWrapper, Button } from "./ProjectsElements";
import Project from "./Project";

const Projects = () => {
  return (
    <Section>
      <ContentWrapper>
        <Project />
        <Project />
        <Project />
        <Project />
      </ContentWrapper>
      <Button>See More Work</Button>
    </Section>
  )
}

export default Projects;