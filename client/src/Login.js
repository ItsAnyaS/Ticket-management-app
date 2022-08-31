import { useState } from 'react'

const Login = () => {
    const [inputs, setInputs] = useState({email: '', password: ''})

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
            console.log(res)
            let tommorow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
            document.cookie = `hash=${res.hashed_user}; expires=` + tommorow.toUTCString()
        } else {
            document.cookie = ''
            alert('failed')
        }
    }


    return (
        <div className='login-body'>
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='moviefan@website.com' name='email' value={inputs.email} onChange={handleChange}/>
                <input type='password' placeholder='password' name='password' value={inputs.password} onChange={handleChange}/>
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login