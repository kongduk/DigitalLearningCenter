import React from 'react';
import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';
import ContentCard from '../components/ContentCard';
import { contentData, featureData } from '../data/contentData';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <section className={styles.featureGrid}>
            {featureData.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                imageSrc={feature.imageUrl}
              />
            ))}
          </section>

          <section className={styles.content}>
            <h1 className={styles.title}>디지털뱅킹센터 콘텐츠(생활)</h1>

            <div className={styles.contentGrid}>
              {contentData.map((content) => (
                <ContentCard
                  key={content.id}
                  id={content.id}
                  title={content.title}
                  imageUrl={content.imageUrl}
                  publisher={content.publisher}
                  youtubeUrl={content.youtubeUrl}
                />
              ))}
            </div>
          </section>
          <footer className={styles.footer}>
              <div className="container">
                <p className={styles.footerText}>© 2025 디지털뱅킹센터. All rights reserved.</p>
              </div>
            </footer>
        </div>
      </main>
    </div>
  );
};

export default HomePage;