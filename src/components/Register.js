import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register({ onRegister, setLoginPage }) {
    const [registerData, setRegisterData] = useState({ email: '', password: '' });

    const history = useHistory();

    function handleChange(e) {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };


    function handleSubmit(e) {
        e.preventDefault();
        onRegister(registerData);
    }

    function linkTo() {
        history.push('/signin');
        setLoginPage(true);
    }

    return (
        (<div className="login__container">
            <h3 className="login__heading">Регистрация</h3>
            <form name="register__form" onSubmit={handleSubmit}>
                <input type="email"
                    name="email"
                    onChange={handleChange}
                    value={registerData.email}
                    placeholder="Email"
                    className="login__input login__input_email"
                    minLength="2" maxLength="30" required />
                <input type="password"
                    name="password"
                    onChange={handleChange}
                    value={registerData.password}
                    placeholder="Пароль"
                    className="login__input login__input_password" minLength="4" required />
                <button type="submit" className="login__save" >Зарегистрироваться</button>
            </form>
            <p className="login__logged">Уже зарегистрированы?
            <button onClick={linkTo} className="login__button" > Войти</button>
            </p>
        </div>)
    )
}

export default Register;