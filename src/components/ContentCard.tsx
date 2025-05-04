import React from 'react';
import styles from '../css/ContentCard.module.css';

interface ContentCardProps {
  id: string;
  title: string;
  imageUrl: string;
  publisher: string;
  youtubeUrl: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  imageUrl,
  publisher,
  youtubeUrl
}) => {
  const handleCardClick = () => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <div className={styles.container} onClick={handleCardClick}>
      <div className={styles.imageWrapper}>
        <img 
          src={imageUrl} 
          alt={title} 
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.publisher}>{publisher}</p>
    </div>
  );
};

export default ContentCard;
