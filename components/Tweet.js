import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementLikes, removeTweet } from '../reducers/tweet'
import { FaPoop, FaTrash } from 'react-icons/fa';
import Moment from 'react-moment';
import moment from 'moment';

  
export default function Tweet() {

  const dispatch = useDispatch()
  const firstname = useSelector((state) => state.user.value);
  const username = useSelector((state) => state.user.value.username);
  const createdAt = useSelector((state) => state.tweet.value);
  // console.log('created', createdAt);
  const allTweets = useSelector((state) => state.tweet.value);
  const [tweetsData, setTweetsData] = useState([]);
  const date = moment(new Date(Date.now())).format('mm');
// console.log("date now", date);

  // console.log('alltweets', allTweets)
  const handleLikes = (data) => {
    dispatch(incrementLikes(data))
  }

  const handleDelete = (tweet) => {
    dispatch(removeTweet(tweet))
  }
  

  const tweets = allTweets.map((data, i) => {
    const createdAt = moment(data.createdAt).format("mm");
    const timer = date - createdAt;
      return (<div>
        <div key={i}>
          <div>
            <span>{data.firstname}</span>@{data.username} {timer} minutes ago
          </div>
          <p>{data.tweet}</p>
          <div>{data.likes}<FaPoop onClick={() => handleLikes(data)}/>
          <FaTrash onClick={() => handleDelete(data.tweet)}/></div>
        </div>
        <p>{data.tweet}</p>
        <div>{data.likes}</div>
      </div>
    );
  });

  return <div>{tweets}</div>;
}
