import React from 'react'
import './SinSup.css'
import {FaEnvelope , FaLock, FaUser} from "react-icons/fa";
// import materio from '../Assets/materio.png';
import { Link } from 'react-router-dom'
import secu from '../img/lock.jpeg';
//import back from '../Assets/back.jpg';

const SignUp = () => {
  return (
    <body className="SinginSignup">
        <div className="box">
            <div className="box-left">
            <img className="materio" src={secu} alt="secutech" />
                        <Link className='switch' to="/Signin">Signin</Link>
            </div>
            <div className="box-right">
                <div className="form-contain">
                    <form action="">
                        <center><h3>Sign Up</h3></center> <br /> <br />
                        <center><div className="h3-underline"></div></center> <br />

                        <div className="user1">
                            <FaUser style={{color: 'black'}}></FaUser>
                        </div>
                        <input type="texts" name="name" placeholder="&nbsp;&nbsp;name" required /><br /><br /> 

                        <div className="envelop1">
                            <FaEnvelope style={{color: 'black'}}></FaEnvelope>
                        </div>
                        <input type="email" name="email" placeholder="&nbsp;&nbsp;email" required /><br /><br />

                        <div className="pass1">
                            <FaLock style={{color: 'black'}}></FaLock>
                        </div>
                        <input type="password" name="password" placeholder="&nbsp;&nbsp;password" required /><br />

                        <a href="" className='forget'>Already have an Account?</a>

                        <u><button className="submit1" type="submit">Sign Up</button></u>

                    </form>
                </div>
            </div>
        </div>
    </body>
  )
}

export default SignUp