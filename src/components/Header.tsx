import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from '../components/Link';
import Logo from './Logo';
import styles from '../css/Header.module.css';

const Header: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setUserId(null);
    window.location.href = '/';
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logoWrapper}>
            <Link href="/" className={styles.mainLink}>
              <Logo />
            </Link>
          </div>

          <div className={styles.searchWrapper}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="배우고 싶은 항목을 입력하세요."
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className={styles.actions}>
            {userId ? (
              <>
                <span className={styles.memberButton}>{userId}님</span>
                <button className={styles.loginButton} onClick={handleLogout}>
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link href="/signup" className={styles.signupLink}>
                  회원가입
                </Link>
                <Link href="/login" className={styles.loginButton}>
                  로그인하기
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
