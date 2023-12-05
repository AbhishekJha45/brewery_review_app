import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BreweryDetails() {
  const [breweryDetails, setBreweryDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBreweryDetails = async () => {
      try {
        const response = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
        setBreweryDetails(response.data);
      } catch (error) {
        console.error('Error fetching brewery details:', error);
      }
    };

    fetchBreweryDetails();
  }, [id]);

  return (
    <div>
      <h2>Brewery Details</h2>
      <h3>{breweryDetails.name}</h3>
      <p>Address: {breweryDetails.street}, {breweryDetails.city}, {breweryDetails.state}</p>
      <p>Phone: {breweryDetails.phone}</p>
      <p>Website: <a href={breweryDetails.website_url} target="_blank" rel="noopener noreferrer">{breweryDetails.website_url}</a></p>
      <p>Current Rating: {Math.floor(Math.random()*5)+1}</p>
      <p>State:{breweryDetails.state}, City:{breweryDetails.city}</p>     
    </div>
  );
}

export default BreweryDetails;