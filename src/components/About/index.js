import { Section, TopRule, ContentWrapper, Header, Description } from "./AboutElements";

const About = () => {
  return (
    <Section>
      <TopRule />
      <ContentWrapper>
        <Header>
          <h2>About Me</h2>
        </Header>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Description>
      </ContentWrapper>
    </Section>
  );
};

export default About;
