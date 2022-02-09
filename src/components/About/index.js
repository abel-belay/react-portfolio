import {
  Section,
  TopRule,
  ContentWrapper,
  Header,
  Description,
} from "./AboutElements";

const About = () => {
  return (
    <Section id="about-section">
      <TopRule />
      <ContentWrapper>
        <Header>
          <h2>About Me</h2>
        </Header>
        <div>
          <div></div>
          <Description>
            Hi, I'm Abel and I am a full-stack web developer with a focus on
            MongoDB, Express, React, and Node.js. I spend my days either working
            on a new project or learning something new.
          </Description>
        </div>
      </ContentWrapper>
    </Section>
  );
};

export default About;
