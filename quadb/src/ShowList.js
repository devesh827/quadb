import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Show List</h1>
      <table border='2' style={{backgroundColor:'red',color:'yellow'}}>
        <thead >
          <tr>
            <th>Show Name</th>
            <th>Summary</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {shows.map(show => (
            <tr key={show.show.id}>
              <td>{show.show.name}</td>
              <td>{show.show.summary}</td>
              <td><a href={show.show.url}>{show.show.url}</a></td>
              <td><Link to={`/show/${show.show.id}`}>View Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowList;
