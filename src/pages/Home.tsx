import React from 'react';
import CarbonParticles from '../components/CarbonParticles';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Programs from '../components/Programs';
import Wilayah from '../components/Wilayah';
import News from '../components/News';
import CtaStrip from '../components/CtaStrip';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <CarbonParticles />
      <Hero />
      <Mission />
      <Programs />
      <Wilayah />
      <News />
      <CtaStrip />
    </div>
  );
};

export default Home;
