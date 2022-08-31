import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [inputs, setInputs] = 
    useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })

    let navigate = useNavigate()

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewUser()
    }

    const addNewUser = async () => {
        let req = await fetch('http://localhost:3000/auth/signup', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(inputs)
        })
        if (req.ok) {
            let res = await req.json()
            let tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
            document.cookie = `hash=${res.hashed_user}; expires=` + tomorrow.toUTCString()
            console.log('cookie', document.cookie)
            navigate('/')
        } else {
            document.cookie=''
            alert('failed')
        }
    }


    return (
        <div className='signup-body'>
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='moviefan@website.com' name='email' value={inputs.email} onChange={handleChange} />
                <input type='text' placeholder='John' name='first_name' value={inputs.first_name} onChange={handleChange} />
                <input type='text' placeholder='Smith' name='last_name' value={inputs.last_name} onChange={handleChange} />
                <input type='password' placeholder='password' name='password' value={inputs.password} onChange={handleChange} />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp