import React from 'react';
import styles from '../css/ContentCard.module.css';

interface ContentCardProps {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  publisher: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  subtitle,
  imageUrl,
  publisher
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img 
          src={imageUrl} 
          alt={title} 
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.publisher}>{publisher}</p>
    </div>
  );
};

export default ContentCard;