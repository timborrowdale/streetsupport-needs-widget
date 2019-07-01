import React from 'react';
import Need from './need';
import './needs-list.css';

export default ({needs}) => (
  <div className="needs-list">
      {needs.map(need => <Need need={need} key={need.id} />)}
  </div>
)