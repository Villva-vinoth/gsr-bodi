import React from 'react'
import './login.css'
import img from '../../png/gsr.png'
const Login = () => {



    return (
        <div className='login-display'>
            <div className='login-logo'>
                <img src={img} alt='logo' width={'70px'} height={'70px'} style={{borderRadius:"80px",mixBlendMode:"multiply"}}/>
            </div>
            <div className='login-inner-display'>
                <div className='login-content'>
                    <div className='login-form-display'>
                        <label className='login-form-name'>Welcome Back </label>

                        <input type='text' placeholder='Email' required />

                        <input type='password' placeholder='Password' required />

                        <button className='login-submit-btn'>Login</button>
                    </div>
                </div>
                <div className='login-image'></div>
            </div>

        </div>
    )
}

export default Login