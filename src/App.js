import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={styles.app}>
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure the container takes up the full viewport height
  },
};



export default App;
