import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 All rights reserved.</p>
    </footer>
  );
};


const styles = {
    footer: {
      padding: '30px',
      textAlign: 'center',
      backgroundColor: '#282c34',
      color: '#fff',
      marginTop: 'auto', // Pushes the footer to the bottom
    },
  };
  
export default Footer;
