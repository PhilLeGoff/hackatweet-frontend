import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Tweet() {
  const allTweets = useSelector((state) => state.tweet.value)
  console.log('all tweets', allTweets)
  const [tweetsData, setTweetsData] = useState([]);
  
    const tweets = allTweets.map((data, i) => {
        console.log('map', data);
      return (
        <div key={i}>
          <div>
            <span>{data.firstname}</span>@{data.username} + Temps écoulé
          </div>
          <p>{data.tweet}</p>
          <div>{data.likes}</div>
        </div>
      );
    });
  

  return <div>{tweets}</div>;
}
