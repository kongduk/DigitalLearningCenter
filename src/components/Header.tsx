import React from 'react';
import { Search, Menu } from 'lucide-react';
import { Link } from '../components/Link';
import Logo from './Logo';
import styles from '../css/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logoWrapper}>
            <Logo />
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
            <button className={styles.memberButton}>
              <span>회원</span>
            </button>
            
            <Link href="#" className={styles.signupLink}>
              회원가입
            </Link>
            
            <button className={styles.loginButton}>
              <span>로그인하기</span>
            </button>
            
            <button className={styles.menuButton}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;