import styles from '../styles/Home.module.css';
const fetch = require('node-fetch')
import { Modal } from 'antd';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import { useRouter } from 'next/router'

function SignIn() {
    const [isSignInVisible, setIsSignInVisible] = useState(false);
    const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    const router = useRouter()
    const dispatch = useDispatch();
    const connectedUser = useSelector((state) => state.user.value)

    const showSignInModal = () => {
		setIsSignInVisible(!isSignInVisible);
	};

    const handleConnection = () => {
        fetch('http://localhost:3000/users/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: signInUsername, password: signInPassword }),
            }).then(response => response.json())
                .then(data => {
                    if (data.result) {
                        dispatch(login({ username: data.user.username, token: data.user.token, firstname: data.user.firstname }));
                        setSignInUsername('');
                        setSignInPassword('');
                        setIsSignInVisible(false)
                        router.push('./profile')
              console.log(connectedUser)
                    }
                });
    };
    
    const signInModal = <div className={styles.registerSection}>
    <p>Sign-in</p>
    <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
    <input type="password" placeholder="Password" id="signInassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
    <button id="signin" onClick={() => handleConnection()}>Sign In</button>
    </div>


    return (
        <div>
        <button onClick={() => showSignInModal()}>Sign In</button>
        {isSignInVisible && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} visible={isSignInVisible} closable={false} footer={null}>
					{signInModal}
				</Modal>
                </div>}
        </div>
    )
}

export default SignIn;