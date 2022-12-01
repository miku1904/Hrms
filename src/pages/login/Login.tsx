import React, { useState } from 'react'
import Input from '../../components/input/Input'
import Email from '../../assets/images/Group 4email.svg'
import Password from '../../assets/images/Group 7password.svg'
import logo from '../../assets/images/logo_white.svg'
import style from './Login.module.css'

type Userprops = {
  username: string
  password: string
}



function Login() {
  const [userData, setUserdata] = useState<Userprops>({
    username: '',
    password: '',
  })

  const handleChange = () => {}

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
  }



  return (
    <div className={style.maincontainer}>
      <div className={style.maincontain}>
        <div className={style.login}>
          <div className={style.leftsection}>
            <div className={style.logotext}>
              <div>
                <img src={logo} className={style.logo} />
              </div>
              <div className={style.hrmstext}>
                <p>
                  <span>H</span>uman
                </p>
                <p>
                  <span>R</span>esource
                </p>
                <p>
                  <span>M</span>anagement
                </p>
                <p>
                  <span>S</span>ystem
                </p>
              </div>
            </div>
          </div>
          <div className={style.inputsection}>
            <p className={style.inputtext}>Login</p>
            <form onSubmit={(event)=> handleSubmit(event)}>
              <div className={style.inputemail}>
                <label className={style.inputlabel}>Email:</label>
                <Input
                  type="text"
                  placeholder="kenzi.lawson@example.com"
                  className={`${style.emailInput}`}
                  handleChange={handleChange}
                  name="username"
                  value={userData.username}
                />
                <img src={Email} className={style.emaillogo} />
              </div>
              <div className={style.inputpassword}>
                <label className={style.passwordlabel}>Password:</label>
                <Input
                  type="text"
                  placeholder="********"
                  className={`${style.passwordInput}`}
                  handleChange={handleChange}
                  name="password"
                  value={userData.password}
                />
                <img
                  src={Password}
                  className={style.passwordlogo}
                  // onClick={showPassword}
                />
              </div>
              <button className={style.loginButton}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
