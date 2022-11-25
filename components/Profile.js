import styles from '../styles/profile.module.css';
import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
// import { logout } from '../reducers/user'
import { addTweet } from '../reducers/tweet';
import { useRouter } from 'next/router'
import Tweet from './Tweet'
import ShowUser from './ShowUser'

export default function Profile({setIsConnected} ) {
    const dispatch = useDispatch()
    const [renderTweets, setRenderTweets] = useState(0)
    const username = useSelector((state) => state.user.value.username);
    const firstname = useSelector((state) => state.user.value.firstname);
    const allTweets = useSelector((state) => state.tweet.value)

  const router = useRouter();
  const [tweet, setTweet] = useState('');

    const handleClickTweet = () => {
        fetch("http://localhost:3000/tweets", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ tweet: tweet, username: username, firstname: firstname})
        })
        .then(response => response.json())
        .then((data) => {
            dispatch(addTweet({
                firstname: data.newTweet.firstname,
                username: data.newTweet.username,
                tweet: data.newTweet.tweet,
                likes: data.newTweet.likes,
                createdAt:new Date(Date.now()),
            }))
            setTweet('')
        })
    }
  return (
    <div className={styles.profileContainer}>
        <ShowUser/>
        <div>
            <h2>Home</h2>
            <input type="text" placeholder="What's on my mind..." onChange={(e) => setTweet(e.target.value)} value={tweet}/>
            <button onClick={() => handleClickTweet()}>Tweety</button>
            <div>
                <Tweet />
            </div>
        </div>   
        <div>
            <h2>Trends</h2>
            <div>COMPOSANTS hashtag</div>
        </div>
      </div>
  );
}
