import { Section, ContentWrapper } from "./ProjectsElements";
import Project from "./Project";

const Projects = () => {
  return (
    <Section>
      <ContentWrapper>
        <Project />
        <Project />
      </ContentWrapper>
    </Section>
  )
}

export default Projects;