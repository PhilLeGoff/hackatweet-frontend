import styles from '../styles/Home.module.css';
const fetch = require('node-fetch')
import { Modal } from 'antd';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import Profile from '../components/Profile'
import Tweet from '../components/Tweet'

function Home() {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [signUpFirstname, setSignUpFirstname] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

  const dispatch = useDispatch();
  const connectedUser = useSelector((state) => state.user.value)

  // console.log('connected', connectedUser)

  const showSignInModal = () => {
		setIsSignInVisible(!isSignInVisible);
	};

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
      console.log(data)
      if (data.result) {
        dispatch(login({ username: signUpUsername, token: data.user.token }));
        setSignUpFirstname('');
        setSignUpUsername('');
        setSignUpPassword('');
        setIsSignUpVisible(false)
      }
    })
  }

  const handleConnection = () => {
    fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
          console.log('connected')
					dispatch(login({ username: signInUsername, token: data.user.token }));
					setSignInUsername('');
					setSignInPassword('');
					setIsSignInVisible(false)
          console.log(connectedUser)

				}
			});
	};

  const signUpModal = <div className={styles.registerSection}>
  <p>Sign-up</p>
  <input type="text" placeholder='Firstname' id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
  <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
  <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
  <button id="signup" onClick={() => handleRegister()}>Sign Up</button>
  </div>

  const signInModal = <div className={styles.registerSection}>
  <p>Sign-in</p>
  <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
  <input type="password" placeholder="Password" id="signInassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
  <button id="signin" onClick={() => handleConnection()}>Sign In</button>
  </div>

  return (
    <div>
      <main className={styles.main}>
      {isSignUpVisible && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} visible={isSignUpVisible} closable={false} footer={null}>
					{signUpModal}
				</Modal>
			</div>}
      {isSignInVisible && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} visible={isSignInVisible} closable={false} footer={null}>
					{signInModal}
				</Modal>
			</div>}
        <div className={styles.rightside}></div>
        <div className={styles.leftside}>
          <p>LOGO</p>
          <h1>See what's happenin' ..</h1>
          <h3>Join CackaTweet Today</h3>
          <button onClick={() => showSignUpModal()}>Sign Up</button>
          <p>Already have an account ?</p>
          <button onClick={() => showSignInModal()}>Sign In</button>
        </div>
      </main>
      <Profile />
      <Tweet />
    </div>
  );
}

export default Home;
