import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styles from './AddContent.module.css';

const AddContentPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    imageUrl: '',
    publisher: '',
    youtubeUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const { title, imageUrl, publisher, youtubeUrl } = form;

    if (!title || !youtubeUrl) {
      alert('제목과 유튜브 URL은 필수입니다.');
      return;
    }

    const newItem = {
        id: Date.now().toString(),
        title,
        imageUrl,
        publisher,
        youtubeUrl,
    };

    const stored = localStorage.getItem('contents');
    const contents = stored ? JSON.parse(stored) : [];
    contents.push(newItem);
    localStorage.setItem('contents', JSON.stringify(contents));

    alert('콘텐츠가 추가되었습니다!');
    navigate('/');
  };

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <h2>영상 콘텐츠 추가</h2>
        <input
          name="title"
          placeholder="제목 *"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="imageUrl"
          placeholder="이미지 URL"
          value={form.imageUrl}
          onChange={handleChange}
        />
        <input
          name="publisher"
          placeholder="출판사"
          value={form.publisher}
          onChange={handleChange}
        />
        <input
          name="youtubeUrl"
          placeholder="유튜브 URL *"
          value={form.youtubeUrl}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>추가하기</button>
      </div>
    </div>
  );
};

export default AddContentPage;
