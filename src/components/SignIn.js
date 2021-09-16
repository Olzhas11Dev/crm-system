import React from 'react'
import '../style/signIn.css'
import {Link} from 'react-router-dom'

function SignIn() {
    return (
        <div className='signIn_main' >
           <div className="signIn_card">
               <h1>code me</h1>
               <div className='signIn_container'>
                   <div className='sign_row' >
                       <Link to ='/' >Sign Up</Link>
                       <Link to ='/sign_in' >Sign In</Link>
                   </div>
                   <div className="signIn_line_active">
                       <div className='signIn_left' ></div>
                       <div className='signIn_right' ></div>
                   </div>
                   <div className="line_active">
                       <div></div>
                   </div>
                   <div className="sign_input_section">
                       <input type="text" placeholder='Company Email' />
                       <input type="text" placeholder='Password' />
                   </div>
                   <button className='btn_signUp btn_general' >SIGN IN</button>
               </div>
           </div>
        </div>
    )
}

export default SignIn
