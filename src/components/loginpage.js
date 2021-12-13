import styles from '../styles/Home.module.css'
import React from "react";
import { useState } from "react";
import { useRouter } from 'next/router';


export default function login() {

    const router = useRouter();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (event) => {
         const value = event.target.value;
         setUsername(value);
    }

    const handlePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    }

    const handleLogin = () => {
        router.push('/firstpage')
    }
    return (
        <div className={styles.container}>
            <p>
                login
                <input type='text' value={username} onChange={handleUsername}/>
            </p>

            <p>
                password
                <input type='text' value={password} onChange={handlePassword}/>
            </p>

            <div className={styles.loginBtn}>
                <button onClick={handleLogin}>login</button>
            </div>
               
        </div>
    )
}


   