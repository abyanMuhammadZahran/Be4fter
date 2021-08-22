import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        Be4fter
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus, nunc vitae euismod efficitur, tortor risus mollis arcu, mattis scelerisque eros nulla a urna. Sed quis tortor nec dolor tempor ultricies.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;