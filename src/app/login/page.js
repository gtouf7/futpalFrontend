// LOGIN PAGE
'use client';

import styles from './login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const router = useRouter();
    const [ error, setError ] = useState(''); // TBD

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        //console.log(data.JWToken);
        //console.log(data.user.team);
        if (response.ok) {
            //console.log(data);
            const selTeam = data.user.team;
            localStorage.setItem('token', data.JWToken);
            const token = localStorage.getItem('token');
            if(!selTeam) {
                //localStorage.setItem('token', data.JWToken);
                router.push('/teamAssign');
            } else if (token) {
            //localStorage.setItem('token', data.JWToken);
            router.push('/dashboard');
            }
            
        } else {
            console.log('Login failed');
        }
    };

    function redirectSignUp() {
        router.push('/register');
    }

    function goHome() {
        router.push("/");
    }

    return(
        <div className={styles.login}>
            <h2 className={styles.logo} onClick={goHome}>FUTPAL</h2>
            <div className={styles.loginForm}>
                <p>Log in to prepare for your next match!</p>
                <form onSubmit={handleLogin}>
                    <label>Email</label><br/>
                    <input className={styles.input} type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <label>Password</label><br/>
                    <input className={styles.input} id="pwd" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <button className={styles.btn} type="submit">Login</button>
                </form>
            </div>
            <p className={styles.signup}>Don't have an account? <span className={styles.registerBtn} onClick={redirectSignUp}>Sign Up</span></p>
        </div>
    );
}