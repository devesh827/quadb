import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function ShowDetails({props}) {
  const [show, setShow] = useState({});
  const {id}=useParams


  useEffect(() => {
    axios.get(`https://api.tvmaze.com/search/shows?q=all/${show.id}`)
      .then(response => {
        setShow(response.data);
        console.log("response",response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [show.id]);
console.log("show:",show)
  return (
    <div>
      <h1>{props.name}</h1>
      <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
    </div>
  );
}

export default ShowDetails;
