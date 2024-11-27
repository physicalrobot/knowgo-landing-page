import React from 'react';
import logo from '../assets/knowgologo.png';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>
        Welcome to <span style={styles.know}>Know</span>
        <span style={styles.go}>Go</span>!
      </h1>
      <div style={styles.logo}>
        <img src={logo} alt="the site logo" style={styles.image} />
      </div>
      <p style={styles.subtitle}>"Knowledge that Goes Where You Go."</p>
      <button style={styles.ctaButton}>Coming Soon</button>
    </section>
  );
};

const styles = {
    hero: {
        padding: '50px 20px',
        textAlign: 'center',
        backgroundColor: '#282c34',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1, // Allow this section to grow and fill available space
      },
      title: {
        fontSize: '3rem',
        fontFamily: 'Quicksand, Arial, sans-serif',
        marginBottom: '20px',
      },
      logo: {
        marginBottom: '20px',
        
      },
      image: {
        height: '500px',
        width: '500px',
        objectFit: 'cover', // Ensures the image scales properly within the defined size
      },
      subtitle: {
        fontSize: '1.5rem',
        margin: '10px 0',
      },
      ctaButton: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#407EA6',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
  know: {
    color: "#407EA6", // Color for "Know"
  },
  go: {
    color: "#FF723B", // Color for "Go"
  },

};

export default Hero;
