import { useState } from 'react';
import LoginStyles from './Login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function handleLoginForm(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("user signed in: ", user.email);
                navigate("/check")
            })
            .catch((error) => {
                alert("Error signing in : ", error.message);
            })
    }
    return (
        <div className={LoginStyles.login__container}>
            <h3 className={LoginStyles.heading__tag}>NeuroDocs</h3>
            <form className={LoginStyles.login__inner__container} onSubmit={handleLoginForm}>
                <input 
                    type="email" 
                    placeholder='Enter your username'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={LoginStyles.input__container}
                    />
                
                <input 
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={LoginStyles.input__container}
                    />

                <button type='button' onClick={() => setShowPassword(prev => !prev)}>eye</button>
                <button type='submit'>Sign in</button>
            </form>
        </div>
    )
}