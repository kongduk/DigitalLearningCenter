import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';
import ContentCard from '../components/ContentCard';
import { contentData, featureData } from '../data/contentData';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [contents, setContents] = useState<any[]>([]);  // 콘텐츠 리스트 상태
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }

    // localStorage에서 콘텐츠 데이터를 가져와서 상태에 저장
    const storedContents = localStorage.getItem('contents');
    if (storedContents) {
      setContents(JSON.parse(storedContents)); // 이미 저장된 콘텐츠가 있으면 상태 업데이트
    } else {
      // localStorage에 콘텐츠가 없으면 기본 contentData를 저장
      localStorage.setItem('contents', JSON.stringify(contentData));
      setContents(contentData);  // 기본 더미 데이터를 상태에 저장
    }
  }, []);

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
            <div className={styles.align}>
              <h1 className={styles.title}>디지털뱅킹센터 콘텐츠(생활)</h1>
              {userId ? (
                <button onClick={() => navigate('/add')} className={styles.addButton}>+ 콘텐츠 추가</button>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.contentGrid}>
              {contents.map((content) => (
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
