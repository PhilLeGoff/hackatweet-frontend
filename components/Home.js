import styles from '../styles/Home.module.css';
const fetch = require('node-fetch');
import { Modal } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
// import Profile from '../components/Profile'
// import Tweet from '../components/Tweet'
import SignIn from './SignIn';
import SignUp from './Signup';
import Profile from './Profile';

function Home() {
  const connected = useSelector((state) => state.user.value);
  console.log(connected);

  const logPage = (
    <div>
      <main className={styles.main}>
        <div className={styles.leftside}></div>
        <div className={styles.rightside}>
          <SignIn />
          <SignUp />
        </div>
      </main>
    </div>
  );

  return (
    
      <div className={styles.mainContainer}>
        <div className={styles.leftside}></div>
        <div className={styles.rightside}>
        <div className={styles.connectionContainer}>
        <p>LOGO</p>
        <h1>See what's happenin' ..</h1>
        <h3>Join CackaTweet Today</h3>
        <SignUp />
        <p>Already have an account ?</p>
        <SignIn />
        </div>
        </div>
      </div>
      
  );
}

export default Home;
