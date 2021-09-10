import React from 'react';
import { useState } from 'react';

function Login({ onLogin }) {
    const [userData, setUserData] = useState({ email: '', password: '' });

    function handleChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(userData);
    }
    return (
        <div className="login__container">
            <h3 className="login__heading">Вход</h3>
            <form name="auth__form" onSubmit={handleSubmit}>
                <input type="email"
                    name="email"
                    onChange={handleChange}
                    value={userData.email}
                    placeholder="Email"
                    className="login__input login__input_email"
                    minLength="2" maxLength="30" required />
                <input type="password"
                    name="password"
                    onChange={handleChange}
                    value={userData.password}
                    placeholder="Пароль"
                    className="login__input login__input_password"
                    minLength="6" required />
                <button type="submit" className="login__save" >Войти</button>
            </form>
        </div>
    )
}

export default Login;