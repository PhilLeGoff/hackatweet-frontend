import styles from '../styles/Profile.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';
import { useRouter } from 'next/router';
import Tweet from './Tweet';
import { createdAt } from '../reducers/tweet';

export default function Profile({ setIsConnected }) {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);
  const firstname = useSelector((state) => state.user.value.firstname);

  const router = useRouter();
  const [tweet, setTweet] = useState('');

  const handleClickTweet = () => {
    // console.log("couille");
    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tweet: tweet,
        username: username,
        firstname: firstname,
        createdAt: Date.now(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTweet('');
        dispatch(createdAt(Date.now()));
      });
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };
  return (
    <div className={styles.profileContainer}>
      <div>
        <p>ICON//</p>
        <p>NOM + ICONE + @username</p>
        <button onClick={() => handleLogout()} />
      </div>
      <div>
        <h2>Home</h2>
        <input
          type="text"
          placeholder="What's on my mind..."
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
        />
        <button
          onClick={() => {
            handleClickTweet();
          }}
        >
          Tweety
        </button>
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
