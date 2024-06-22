import Navvar from '../components/Navvar';
import Hero from '../components/Hero';
import Cta from '../components/Cta';
import Demo from '../components/Demo';
import Features from '../components/Features';
import Story from '../components/Story';
import CtaTwo from '../components/CtaTwo';
import Count from '../components/Count';
import SkillShow from '../components/SkillShow';
import { Box } from '@mui/material';
import Tecnology from '../components/Tecnology';

const HomePage = () => {
  return (
    <Box>
      <Navvar />
      <Hero />
      <Cta />
      <Demo />
      <Features />
      <Story />
      <CtaTwo />
      <Count />
      <SkillShow />
      <Tecnology />
    </Box>
  );
};

export default HomePage;
