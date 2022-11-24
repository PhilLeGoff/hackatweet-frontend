import styles from '../styles/profile.module.css';
import {useState} from 'react'
import { useDispatch} from 'react-redux'
import { logout } from '../reducers/user'
import { useRouter } from 'next/router'

export default function Profile({setIsConnected} ) {
    const router = useRouter()
    const dispatch = useDispatch()
    const [tweet, setTweet] = useState('')

    const handleClickTweet = () => {
        // console.log("couille");
        fetch("http://localhost:3000/tweets", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ tweet: tweet })
        }).then(res => res.json())
        .then(data => {
            setTweet('')
        })
        
    }

    const handleLogout = () => {
        dispatch(logout())
        router.push('/')
    }
  return (
    <div className={styles.profileContainer}>
        <div>
            <p>ICON//</p>
            <p>NOM + ICONE + @username</p>
            <button onClick={() => handleLogout()}/>
        </div>   
        <div>
            <h2>Home</h2>
            <input type="text" placeholder="What's on my mind..." onChange={(e) => setTweet(e.target.value)} value={tweet}/>
            <button onClick={() => handleClickTweet()}>Tweety</button>
            <div>
                COMPOSANTS tweets etc...
            </div>
        </div>   
        <div>
            <h2>Trends</h2>
            <div>COMPOSANTS hashtag</div>
        </div>
    </div>
  );
}

