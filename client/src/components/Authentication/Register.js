import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onSubmitHandler = () => {

        const data = {
            email: mail,
            password,
            passwordRepeat
        };

        fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)


        })
            .then(res => res.json())
            .then(data => {
                if (data.type !== 'error') {
                    toast.success(data.message);
                } else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <form className="register-form">
            <label htmlFor="mail">Email</label>
            <input type="text" id="mail" name="mail" onChange={(e) => setMail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />

            <label htmlFor="repeat-password">Repeat Password</label>
            <input type="password" id="repeat-password" name="repeat-password" onChange={(e) => setPasswordRepeat(e.target.value)} />

            <button type="button" onClick={onSubmitHandler} >Register</button>
        </form>
    )
}

export default Register