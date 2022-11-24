import styles from '../styles/profile.module.css';
import {useState} from 'react'
import { useSelector } from 'react-redux';

export default function Profile() {
    const username = useSelector((state) => state.user.value.username);
    const firstname = useSelector((state) => state.user.value.firstname);
    const [tweet, setTweet] = useState('')

    const handleClickTweet = () => {
        // console.log("couille");
        fetch("http://localhost:3000/tweets", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ tweet: tweet, username: username, firstname: firstname})
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            setTweet('')
        })
        
    }

  return (
    <div className={styles.profileContainer}>
        <div>
            <p>ICON//</p>
            <p>NOM + ICONE + @username</p>
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

