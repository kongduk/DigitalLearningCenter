import React from 'react';
import { Droplets } from 'lucide-react';
import styles from '../css/Logo.module.css';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Droplets size={28} className={styles.icon} />
      <span className={styles.text}>디지털배움터</span>
    </div>
  );
};

export default Logo;