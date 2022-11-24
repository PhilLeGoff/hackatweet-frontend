import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Tweet() {
  const firstname = useSelector((state) => state.user.value);
  const username = useSelector((state) => state.user.value.username);
  console.log('username', username);
  console.log('firstname', firstname);

  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then((response) => response.json())
      .then((data) => {
        // console.log('tweet', data);
        setTweetsData(data);
      });
  }, []);
  // console.log(tweetsData);
  
    const tweets = tweetsData.map((data, i) => {
        console.log('map', data);
      return (
        <div key={i}>
          <div>
            <span>{username}</span>@username + Temps écoulé
          </div>
          <p>{data.tweet}</p>
          <div>LIKES</div>
        </div>
      );
    });
  

  return <div>{tweets}</div>;
}
