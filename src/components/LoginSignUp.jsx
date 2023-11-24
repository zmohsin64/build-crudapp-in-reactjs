import React from 'react'

export const LoginSignUp = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" required />
            </div>
            <div className="input">
                <input type="text" required />
            </div>
            <div className="input">
                <input type="text" required/>
            </div>
        </div>
        <div className="forget-password">lost Password? <span>Click Here!</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}
