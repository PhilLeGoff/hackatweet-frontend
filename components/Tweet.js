import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment'

export default function Tweet() {
  const firstname = useSelector((state) => state.user.value);
  const username = useSelector((state) => state.user.value.username);
  const createdAt = useSelector((state) => state.tweet)
  console.log('created', createdAt);
// recupe la date de creation du tweet
// compare with current date

  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then((response) => response.json())
      .then((data) => {
        setTweetsData(data);
      });
  }, []);

  const tweets = tweetsData.map((data, i) => {
    return (
      <div key={i}>
        <div>
          <span>{username}</span>@username +{' '}
          <span>10min ago</span>
        </div>
        <p>{data.tweet}</p>
        <div>LIKES</div>
      </div>
    );
  });

  return <div>{tweets}</div>;
}
