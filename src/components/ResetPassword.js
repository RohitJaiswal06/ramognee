import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const navigate = useNavigate()
  return (
    <div style={{marginLeft:"40%",marginTop:"20%"}}>
      <div style={{width:"39.3%"}}>
        <input type='text' placeholder='email' style={{width:"97.5%"}}/>
      </div>
      <div style={{display:"flex"}}>
        <button style={{width:"20%",marginRight:"1%"}}>ResetPassword</button>
        <button style={{width:"20%"}} onClick={()=>{
            navigate('/login')
        }}>Login</button>
      </div>
    </div>
    
  )
}

export default ResetPassword
