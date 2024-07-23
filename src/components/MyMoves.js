import React, { useState, useEffect } from 'react';
import { fetchData } from '../apiService';
import MoveDetails from './MoveDetails';
import './MyMoves.css';

const MyMoves = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        console.log('Fetched Data:', result);
        setData(result.Customer_Estimate_Flow);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error: {error.message}</div>;
  }

  return (
    <div className="main-container">
     <div className="header">
        {/* <h1>My Moves</h1> */}
      </div>
      <div className="content">
        {data ? (
          data.map((details) => (
            <MoveDetails key={details.estimate_id} details={details} />
          ))
        ) : (
          <div>No customer details available.</div>
        )}
      </div>
    </div>
  );
};

export default MyMoves;
