import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NeedsList from './components/needs-list';

export default () => {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://ssn-api-prod.azurewebsites.net/v2/service-provider-needs/?latitude=53.4776360564516&longitude=-2.23621877217742&pageSize=21&range=10000');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <NeedsList needs={data.items} />
  )
}