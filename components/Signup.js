import styles from '../styles/Home.module.css';
const fetch = require('node-fetch')
import { Modal } from 'antd';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import { useRouter } from 'next/router' 

function SignUp() {
    const [isSignUpVisible, setIsSignUpVisible] = useState(false);
    const [signUpFirstname, setSignUpFirstname] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');

  const dispatch = useDispatch();
  const router = useRouter()
  const connectedUser = useSelector((state) => state.user.value)

  console.log('connected', connectedUser)

  const showSignUpModal = () => {
    setIsSignUpVisible(!isSignUpVisible);
  }

  const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
  }).then(response => response.json())
    .then(data => {
      // console.log(data)
      if (data.result) {
        dispatch(login({ username: signUpUsername, token: data.user.token }));
        setSignUpFirstname('');
        setSignUpUsername('');
        setSignUpPassword('');
        setIsSignUpVisible(false)
      }
    })
  }

  const signUpModal = <div className={styles.registerSection}>
  <p>Sign-up</p>
  <input type="text" placeholder='Firstname' id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
  <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
  <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
  <button id="signup" onClick={() => handleRegister()}>Sign Up</button>
  </div>

  return (
    <div>
        <button onClick={() => showSignUpModal()}>Sign Up</button>
        {isSignUpVisible && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} visible={isSignUpVisible} closable={false} footer={null}>
					{signUpModal}
				</Modal>
			</div>}
    </div>
  )
}

export default SignUp