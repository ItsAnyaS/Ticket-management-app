import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AuthPage.css'

const Login = ({ setLoggedIn }) => {
    const [inputs, setInputs] = useState({email: '', password: ''})
    let navigate = useNavigate()

    const handleChange = (e) => {
        setInputs({...inputs,
        [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        findUser()
    }

    const findUser = async () => {
        let req = await fetch('http://localhost:3000/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs)
        })
        if (req.ok) {
            let res = await req.json()
            let tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
            document.cookie = `hash=${res.hashed_user}; expires=` + tomorrow.toUTCString()
            console.log('cookie', document.cookie)
            setLoggedIn(true)
            navigate('/')
        } else {
            document.cookie = 'hash='
            alert('failed')
        }
    }


    return (
        <div className='login-body'>
            <h3> &nbsp; &nbsp; &nbsp; Log In</h3>
            <form onSubmit={handleSubmit}>
                <div className='input-divider'>
                    <input className='login-input' type='email' placeholder='moviefan@website.com' name='email' value={inputs.email} onChange={handleChange}/>
                </div>
                
                <input className='login-input' type='password' placeholder='password' name='password' value={inputs.password} onChange={handleChange}/>
                <button className='login-submit-button' type='submit'>Get Started!</button>
            </form>
        </div>
    )
}

export default Login