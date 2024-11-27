import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'; // Icons for visual enhancement

const studentFeatures = [
  'Flexible Scheduling',
  'Tailored Learning',
  'Expert-Verified Tutors',
  'Affordable Options',
  'Interactive Feedback',
];

const tutorFeatures = [
  'Easy Onboarding',
  'Location-Based Opportunities',
  'Flexible Earnings',
  'Enhanced Visibility',
  'Performance Insights',
];

const Features = () => {
  return (
    <section style={styles.features}>
      <h2 style={styles.header}>Why Choose <span style={styles.know}>Know</span>
      <span style={styles.go}>Go</span>?</h2>
      <div style={styles.grid}>
        {/* For Students */}
        <div style={styles.card}>
          <FaUserGraduate style={styles.icon} />
          <h3>For Students</h3>
          <ul style={styles.list}>
            {studentFeatures.map((feature, index) => (
              <li key={index} style={styles.listItem}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* For Tutors */}
        <div style={styles.card}>
          <FaChalkboardTeacher style={styles.icon} />
          <h3>For Tutors</h3>
          <ul style={styles.list}>
            {tutorFeatures.map((feature, index) => (
              <li key={index} style={styles.listItem}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const styles = {
 
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  features: {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    flex: 1, // Allow this section to grow and fill available space
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap', // Ensure cards wrap on smaller screens
  },
  card: {
    backgroundColor: '#407EA6',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'left',
    width: '250px',
    minWidth: '200px', // Ensure cards don’t shrink too much
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '10px',
    display: 'block',
    margin: '0 auto',
    color: 'FF723B'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '10px',
    fontSize: '1rem',
  },
  know: {
    color: "#407EA6", // Color for "Know"
  },
  go: {
    color: "#FF723B", // Color for "Go"
  },
};

export default Features;
