import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // import font awesome
import { faUser } from '@fortawesome/free-solid-svg-icons';  // import the user icon
import { faLock } from '@fortawesome/free-solid-svg-icons';  // import the password icon
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';  // import the eye icon to view password
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [visible, setvisible] = useState(false)
    const navigate=useNavigate()
    return (
        <div className='login'>
            <div className="login_box">
                <h1>Login</h1>
                <span className="input_box">
                    <label htmlFor="">Email</label>
                    <span className="email">
                        <FontAwesomeIcon icon={faUser} className='icon1' />
                        <input type="email" name="" id="" />
                    </span>
                    
                </span>
                <span className="input_box">
                    <label htmlFor="">Password</label>
                    <span className="password">
                        <FontAwesomeIcon icon={faLock} className='icon1' />
                        <input type={(visible)?"text":"password"} name="" id="password" />
                        <FontAwesomeIcon icon={faEyeSlash} className='icon2' onClick={()=>setvisible(!visible)} />
                    </span>
                    
                </span>
                <span className="remember">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Remember me</label>
                </span>
                <span className="btn">
                    <button className='btn1' onClick={()=>navigate('/main')} >Login</button>
                    <button className='btn2' onClick={()=>navigate('/SignUp')} >Sign Up</button>
                </span>
            </div>
        </div>
    )
}

export default Login
