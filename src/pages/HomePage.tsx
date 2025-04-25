import React from 'react';
import Header from '../components/Header';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      
      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>© 2025 디지털뱅킹센터. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;