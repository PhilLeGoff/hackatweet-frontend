import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment';

export default function Tweet() {
  const firstname = useSelector((state) => state.user.value);
  const username = useSelector((state) => state.user.value.username);
  const createdAt = useSelector((state) => state.tweet.value);
  // console.log('created', createdAt);
  const allTweets = useSelector((state) => state.tweet.value);
  const [tweetsData, setTweetsData] = useState([]);
  const date = moment(new Date(Date.now())).format('mm');
// console.log("date now", date);

const tweets = allTweets.map((data, i) => {
  const createdAt = moment(data.createdAt).format("mm");
  const timer = date - createdAt;


    return (
      <div key={i}>
        <div>
          <span>{data.firstname}</span>@{username} {timer}minute(s) ago
        </div>
        <p>{data.tweet}</p>
        <div>{data.likes}</div>
      </div>
    );
  });

  return <div>{tweets}</div>;
}
