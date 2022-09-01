import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const AuthPage = ({ setLoggedIn }) => {
    const [showLogin, setShowLogin] = useState(true)

    const handleClickLogin = () => {
        setShowLogin(true)
    }

    const handleClickSignup = () => {
        setShowLogin(false)
    }

    return (
        <div className='auth-page'>
            <hr />
            <div className='login-container'>
                <div className='tab-container'>
                    <button onClick={handleClickLogin}>Log In</button>
                    <button onClick={handleClickSignup}>Sign Up</button>
                </div>
                <div className='login-signup-fields'>
                    {showLogin ?
                        <Login setLoggedIn={setLoggedIn}/>
                    :
                        <SignUp setLoggedIn={setLoggedIn}/>
                    }
                </div>
            </div>
            <hr />
        </div>
    )
}

export default AuthPage