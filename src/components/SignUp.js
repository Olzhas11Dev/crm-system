import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../style/signUp.css'
import { useDispatch } from 'react-redux'
import { addtoData } from './features/authSlice'


function SignUp() {

    const[companyName,setCompanyName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[checkPass,setCheckPass] = useState('')
    const[passAlarm,setPassAlarm] = useState(false)
    
    const dispatch = useDispatch()

    const addData = ()=> {
        let object = {
            id:Math.random(),
            company:companyName,
            password,checkPass
        }

        if(object.password!==object.checkPass){
            setPassAlarm(true)
        } else{
           dispatch(addtoData(object))
            setPassAlarm(false)
        }
        
        setCompanyName('')
        setEmail('')
        setPassword('')
        setCheckPass('')

    }

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
                        <input onChange={(e)=>setCompanyName(e.target.value)} type="text" placeholder='Company Name' value={companyName} />
                        <input  onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Company Email' value={email}/>
                        <input   onChange={(e)=>setPassword(e.target.value)}type="text" placeholder='Password' value={password}/>
                        <input  onChange={(e)=>setCheckPass(e.target.value)}type="text" placeholder='Repeat Password' value={checkPass}/>
                        <div className="password_answer">
                             {passAlarm ? <div className='passwordAlarm'>Password doesn't much</div> : null}
                        </div> 
                   </div>
                   <div className="signUp_agree ">
                       <input type="checkbox"/>
                       <div className='signUp_agree_text' >Agree with the User Agreement and Privacy Policy</div>
                   </div>
                   <button onClick={addData} className='signUp_btn_signUp btn_general' >SIGN UP</button>
               </div>
           </div>
        </div>
    )
}

export default SignUp
