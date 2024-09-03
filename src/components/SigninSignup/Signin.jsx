import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaEnvelope , FaLock} from "react-icons/fa";
// import secu from '../Assets/materio.png';
import './SinSup.css'
// import '../Home/Land'
import secu from '../img/lock.jpeg';

const Signin = () => {
    const navigate = useNavigate()
    const handlelogin = () => {
        navigate('/Dashboard')
    }
  return (
    <body className='SigninSignup'>
        <div className="box">
            <div className="box-left">
                 <img className="materio" src={secu} alt="secutech" /> 

                    <Link className='switch' to="/Register">Sign Up</Link> <br />
            </div>
            <div className="box-right">
                <div className="form-contain">
                    <form action="">
                        <center><h3>Sign In</h3></center> <br /> <br />
                        <center><div className="h3-underline"></div></center> <br />

                        <div className="envelop">
                            <FaEnvelope style={{color: 'black'}}></FaEnvelope>
                        </div>
                        <input type="email" name="email" placeholder="&nbsp;&nbsp;email" required /><br /> <br />

                        <div className="lock">
                            <FaLock className="lock" style={{color: 'black'}}></FaLock>
                        </div>
                        <input type="password" name="password" placeholder="&nbsp;&nbsp;password" required /><br />

                        <a href="" className='forgot'>forgot password?</a>

                        <u><button className="submit" type="submit" onClick={handlelogin}>Sign In</button></u>
                        
                    </form>
                </div>
            </div>
        </div>
    </body>
  )
}

export default Signin