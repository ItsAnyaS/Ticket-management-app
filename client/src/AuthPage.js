import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import './AuthPage.css'

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
            <div className='login-container'>
                <div className='login-fields-holder'>
                    <div className='tab-container'>
                        <button className='login-button' onClick={handleClickLogin}>Log In</button>
                        <button className='login-button' onClick={handleClickSignup}>Sign Up</button>
                    </div>
                    <div className='login-signup-fields'>
                        {showLogin ?
                            <Login setLoggedIn={setLoggedIn}/>
                        :
                            <SignUp setLoggedIn={setLoggedIn}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage