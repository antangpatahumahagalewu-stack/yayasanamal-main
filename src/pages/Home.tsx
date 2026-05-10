import React from 'react';
import CarbonParticles from '../components/CarbonParticles';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Programs from '../components/Programs';
import Wilayah from '../components/Wilayah';
import News from '../components/News';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <SEO
        title="Melestarikan Hutan & Memberdayakan Masyarakat"
        description="Yayasan AMAL adalah mitra strategis Perhutanan Sosial di Kalimantan Tengah — memfasilitasi Project Karbon dari hutan mineral & gambut, pengembangan usaha HHBK, dan API Licence untuk ESG."
        url="https://yayasanamal.org/"
      />
      <CarbonParticles />
      <Hero />
      <Mission />
      <Programs />
      <Wilayah />
      <News />
    </div>
  );
};

export default Home;
