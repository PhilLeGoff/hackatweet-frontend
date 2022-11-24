import styles from '../styles/Home.module.css';
const fetch = require('node-fetch')
import { Modal } from 'antd';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import SignIn from './SignIn'
import SignUp from './Signup'
import Profile from './Profile'

function Home() {
  const connected = useSelector((state) => state.user.value)
  console.log(connected)

  const logPage = <div>
    <main className={styles.main}>
      <div className={styles.leftside}></div>
      <div className={styles.rightside}>
        <SignIn/>
        <SignUp/>
      </div>
    </main>
  </div>

  return (
    <div>
      {logPage}
    </div>
  );
}

export default Home;
