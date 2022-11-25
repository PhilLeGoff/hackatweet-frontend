import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementLikes, removeTweet } from '../reducers/tweet'
import { FaPoop, FaTrash } from 'react-icons/fa';

export default function Tweet() {
  const dispatch = useDispatch()
  const allTweets = useSelector((state) => state.tweet.value)
  console.log('all tweets', allTweets)
  const [tweetsData, setTweetsData] = useState([]);

  // console.log('alltweets', allTweets)
  const handleLikes = (data) => {
    dispatch(incrementLikes(data))
  }

  const handleDelete = (tweet) => {
    dispatch(removeTweet(tweet))
  }
  

  const tweets = allTweets.map((data, i) => {
        // console.log('map', data);
      return (
        <div key={i}>
          <div>
            <span>{data.firstname}</span>@{data.username} + Temps écoulé
          </div>
          <p>{data.tweet}</p>
          <div>{data.likes}<FaPoop onClick={() => handleLikes(data)}/>
          <FaTrash onClick={() => handleDelete(data.tweet)}/></div>
        </div>
      );
    });
  

  return <div>{tweets}</div>;
}
