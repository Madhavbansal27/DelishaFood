import React from 'react'
import './LoginPopup.css'
const LoginPopup = ({ setShowLogin }) => {
  return (
    <div className="login-popup">
      <div className="login-container">
        <div className="img-container">
          <img src="https://www.smithsfoodanddrug.com/content/v2/binary/image/blog/health/heart-healthy-swaps/imageset_hearth-healthy-swaps_01-29--4513006_content_healthyalternatives_hro_dsk_1280x424.png" alt="" />
          <p onClick={()=> setShowLogin(false)} className='exit-btn'>&#10005;</p>
        </div>
        <div className="login-content">
          <form action="post">
          <h2>Sign Up</h2>
            <input type="text" placeholder='Fullname' name='Fullname' />
            <input type="text" placeholder='Email' name='Email' />
            <input type="password" placeholder='Password' name='Password' />
            <button class="button-87" role="button">create account</button>
          </form>
          <div class="checkbox-wrapper-29">
            <label class="checkbox">
              <input type="checkbox" class="checkbox__input" />
              <span class="checkbox__label"></span>
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
          
          <span className='already'>Already have an account?</span> <span className='login-signup'>Login here</span>
          
        </div>
      </div>
    </div>

  )
}

export default LoginPopup
