import { useState } from 'react'
import { toast } from 'react-toastify';

const Login = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');



    const onSubmitHandler = () => {
        const data = {
            email: mail,
            password
        }

        fetch('http://localhost:5000/api/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then(data => {
                if (data.type !== 'error') {

                    toast.success(data.message)
                    localStorage.setItem('SESSID', data.token.split(' ')[1]);
                } else {

                    toast.error(data.message)
                }
            })

    }

    return (
        <form className="login-form">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" onChange={(e) => setMail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />

            <button type="button" onClick={onSubmitHandler} >Login</button>
        </form >
    )
}

export default Login;