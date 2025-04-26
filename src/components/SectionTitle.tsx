import React from 'react';
import styles from '../css/SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = '' }) => {
  return (
    <h2 className={`${styles.title} ${className}`}>
      {title}
    </h2>
  );
};

export default SectionTitle;