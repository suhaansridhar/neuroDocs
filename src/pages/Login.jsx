import { useState } from 'react';
import LoginStyles from './Login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLoginForm(email, password){
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("user signed in: ", user.email);
            })
            .catch((error) => {
                console.error("Error signing in : ", error.message);
            })
    }
    return (
        <div className={LoginStyles.login__container}>
            <form className={LoginStyles.login__inner__container} onSubmit={handleLoginForm}>
                <input 
                    type="email" 
                    placeholder='Enter your username'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                
                <input 
                    type="password"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button type='submit'>Sign in</button>
            </form>
        </div>
    )
}