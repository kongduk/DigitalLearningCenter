import React from 'react';
import styles from '../css/FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  imageSrc,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.imageContainer}>
          {icon && <div className={styles.icon}>{icon}</div>}
          {imageSrc && (
            <img
              src={imageSrc}
              alt={title}
              className={styles.image}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
