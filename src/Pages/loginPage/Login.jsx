import React, { useState } from 'react'
import Navbar from '../../globalcomponents/Navbar'
import { login, Me, signUp } from '../../api/services/authService'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
   
     function handleEmailChange(e) {
       setEmail(e.target.value)
     }
     function handlePasswordChange(e) {
       setPassword(e.target.value)
     }
     const handleLogin = async () => {
       const credentials = { email, password }
       try {
         await login(credentials)
       } catch (error) {
         console.error('login failed:', error)
       }
     }
  return (
      <div>
          <Navbar />
          <div className='p-4'>
      <div>
        <h2 className='text-3xl text-center font-semibold'>LogIn to BabyStory AI</h2>
      </div>
      
      <div className='flex gap-5 sm:gap-0 items-center sm:items-center justify-between sm:justify-around flex-col sm:flex-row'>
      <div className='w-full sm:w-1/2 sm:mt-10'>
     <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input value={email} onChange={handleEmailChange} type="text" className="input w-full sm:w-3/4" placeholder="Type here" />
</fieldset>
     <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input value={password} onChange={handlePasswordChange} type="text" className="input w-full sm:w-3/4" placeholder="Type here" />
</fieldset>
     
<button onClick={handleLogin} className='btn btn-primary mt-5 w-full sm:w-3/4'>Login</button>
            <div>
              <span className='text-sm'>Dont have an account?</span>
              <Link className="underline text-sm" to="/signup">
        Click Here
        </Link>
            </div>
          </div>
          

      <div className='w-full sm:w-1/3 sm:mt-20'>
        <img src="./6eca9ae552960466f15b7ba82bd8a467.png" alt="image" />
      </div>
     </div>
  
     </div>
    </div>
  )
}

export default Login
