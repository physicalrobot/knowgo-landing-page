import React from 'react';

const testimonials = [
  { name: 'Alice', feedback: 'This platform transformed our workflow!' },
  { name: 'Bob', feedback: 'Highly recommend to everyone!' },
  { name: 'Charlie', feedback: 'The best experience I’ve had.' },
];

const Testimonials = () => {
  return (
    <section style={styles.testimonials}>
      <h2>Testimonials</h2>
      <div style={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={styles.card}>
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  testimonials: {
    padding: '40px',
    backgroundColor: '#eee',
    textAlign: 'center',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    width: '200px',
  },
};

export default Testimonials;
