import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { memberData } from '../data/memberData';
import styles from './Signup.module.css';
import Header from '../components/Header';

const SignUp: React.FC = () => {
    useEffect(() => {
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        if (existingUsers.length === 0) {
            localStorage.setItem('users', JSON.stringify(memberData));
        }
    }, []);


    const [form, setForm] = useState({
        id: '',
        password: '',
        confirmPassword: '',
        name: '',
        birth: '',
        gender: '',
    });

    const [idCheckMessage, setIdCheckMessage] = useState('');
    const [passwordCheckMessage, setPasswordCheckMessage] = useState('');
    const [confirmCheckMessage, setConfirmCheckMessage] = useState('');
    const [isIdChecked, setIsIdChecked] = useState(false);
    const [isPasswordChecked, setIsPasswordChecked] = useState(false);

    const navigate = useNavigate();

    const idInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        if (name === 'confirmPassword') {
            setConfirmCheckMessage(value === form.password ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.');
        }

        if (name === 'id') {
            setIsIdChecked(false);
            setIdCheckMessage('');
        }

        if (name === 'password') {
            setIsPasswordChecked(false);
            setPasswordCheckMessage('');
        }
    };

    const handleIdCheck = () => {
        if (form.id.length < 6 || form.id.length > 12) {
            setIdCheckMessage('아이디는 6~12자여야 합니다.');
            setIsIdChecked(false);
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const isDuplicate = users.some((user: any) => user.id === form.id);

        if (isDuplicate) {
            setIdCheckMessage('이미 존재하는 아이디입니다.');
            setIsIdChecked(false);
        } else {
            setIdCheckMessage('사용 가능한 아이디입니다.');
            setIsIdChecked(true);
        }
    };

    const handlePasswordCheck = () => {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{9,16}$/;
        const isValid = regex.test(form.password);
        setPasswordCheckMessage(
            isValid ? '안전한 비밀번호입니다.' : '비밀번호 형식이 올바르지 않습니다.'
        );
        setIsPasswordChecked(isValid);
    };

    const handleSignUp = () => {
        if (!isIdChecked) {
            alert('아이디 중복 확인을 해주세요.');
            idInputRef.current?.focus();
            return;
        }

        if (!isPasswordChecked) {
            alert('비밀번호 입력 확인을 해주세요.');
            passwordInputRef.current?.focus();
            return;
        }

        if (form.password !== form.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            confirmPasswordRef.current?.focus();
            return;
        }

        if (!form.name || !form.gender) {
            alert('이름과 성별은 필수입니다.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const isDuplicate = users.some((user: any) => user.id === form.id);
        if (isDuplicate) {
            alert('이미 존재하는 아이디입니다.');
            return;
        }

        const newUsers = [...users, { id: form.id, password: form.password }];
        localStorage.setItem('users', JSON.stringify(newUsers));

        alert('회원가입이 완료되었습니다.');
        navigate('/', { state: { userId: form.id } });
    };

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}>회원정보</h2>
                <table className={styles.signupTable}>
                    <tbody>
                        <tr>
                            <th><label htmlFor="id">아이디 <span>*</span></label></th>
                            <td>
                                <div className={styles.row}>
                                    <input
                                        id="id"
                                        name="id"
                                        value={form.id}
                                        onChange={handleChange}
                                        placeholder="아이디를 입력하세요"
                                        ref={idInputRef}
                                    />
                                    <button type="button" onClick={handleIdCheck} style={{ color: 'black' }}>중복확인</button>
                                </div>
                                <p className={styles.helperText}>{idCheckMessage}</p>
                            </td>
                        </tr>

                        <tr>
                            <th><label htmlFor="password">비밀번호 <span>*</span></label></th>
                            <td>
                                <div className={styles.row}>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="비밀번호"
                                        ref={passwordInputRef}
                                    />
                                    <button type="button" onClick={handlePasswordCheck} style={{ color: 'black' }}>입력확인</button>
                                </div>
                                <p className={styles.helperText}>{passwordCheckMessage}</p>
                            </td>
                        </tr>

                        <tr>
                            <th><label htmlFor="confirmPassword">비밀번호 확인 <span>*</span></label></th>
                            <td>
                                <div className={styles.row}>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                        ref={confirmPasswordRef}
                                        placeholder="비밀번호 확인"
                                    />
                                </div>
                                <p className={styles.helperText}>{confirmCheckMessage}</p>
                            </td>
                        </tr>

                        <tr>
                            <th><label htmlFor="name">이름 <span>*</span></label></th>
                            <td>
                                <input
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="이름을 입력하세요"
                                />
                            </td>
                        </tr>

                        <tr>
                            <th><label htmlFor="birth">생년월일</label></th>
                            <td>
                                <input
                                    id="birth"
                                    name="birth"
                                    value={form.birth}
                                    onChange={handleChange}
                                    placeholder="YYYY.MM.DD"
                                />
                            </td>
                        </tr>

                        <tr>
                            <th>성별 <span>*</span></th>
                            <td>
                                <div className={styles.genderRow}>
                                    <label><input type="radio" name="gender" value="남" onChange={handleChange} /> 남</label>
                                    <label><input type="radio" name="gender" value="여" onChange={handleChange} /> 여</label>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button className={styles.submitButton} onClick={handleSignUp}>회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
