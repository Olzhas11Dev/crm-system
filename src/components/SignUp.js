import React from 'react'
import {Link} from 'react-router-dom'
import '../style/signUp.css'


function SignUp() {


    return (
        <div className='signUp_main' >
           <div className="signUp_card">
               <h1>code me</h1>
               <div className='signUp_container'>
                   <div className='signUp_row' >
                       <Link to ='/' >Sign Up</Link>
                       <Link to ='/sign_in' >Sign In</Link>
                   </div>
                   <div className="signUp_line_active">
                       <div className='signUp_left' ></div>
                       <div className='signUp_right' ></div>
                   </div>
                   <div className="signUp_input_section">
                       <input type="text" placeholder='Company Name' />
                       <input type="text" placeholder='Company Email' />
                       <input type="text" placeholder='Password' />
                       <input type="text" placeholder='Repeat Password'/>
                   </div>
                   <div className="signUp_agree ">
                       <input type="checkbox"/>
                       <div className='signUp_agree_text' >Agree with the User Agreement and Privacy Policy</div>
                   </div>
                   <button className='signUp_btn_signUp btn_general' >SIGN UP</button>
               </div>
           </div>
        </div>
    )
}

export default SignUp
