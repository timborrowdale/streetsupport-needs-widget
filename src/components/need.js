import React from 'react';
import he from 'he';
import {format as timeago } from 'timeago.js';
import './need.scss'

export default ({ need }) => {
  return (
    <div className="need">
      <div className="card-title">
        <a href={`https://streetsupport.net/give-help/help/request/?id=${need.id}`}><h1>{he.decode(need.description)}</h1></a>
      </div>
      <div className="card-details">
        <p>Posted {timeago(need.neededDate, 'en_GB')}</p>
        <a className="help" href={`https://streetsupport.net/give-help/help/request/?id=${need.id}`}>I can Help!</a>
      </div>      
    </div>
  );
}