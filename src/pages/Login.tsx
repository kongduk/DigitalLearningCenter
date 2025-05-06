import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const LoginPage: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!id || !password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const matchedUser = storedUsers.find(
      (user: { id: string; password: string }) => user.id === id && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem('userId', id);
      alert(`${id}님 환영합니다`);
      navigate('/', { state: { userId: id } });
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };


  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>로그인</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>로그인</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
