import React, { useState } from 'react';
import './App.css'; // Assuming you've added the CSS file

function MeaningFinder() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    console.log('Input Changed:', event.target.value); // Log input change
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    if (name.trim() === '') {
      console.log('Error: Empty input'); // Log empty input error
      setError('Please enter a valid name.');
      setResult(null);
      return;
    }

    console.log('Fetching data for:', name); // Log name before fetching

    setLoading(true);
    setError(null);

    fetch(`https://api.agify.io/?name=${name}`)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); // Log API response
        setLoading(false);
        setResult(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Log fetch error
        setLoading(false);
        setError('Error fetching data. Please try again.');
      });
  };

  return (
    <div className="meaning-finder-container">
      <h1>Meaning Finder</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter a name"
        className="meaning-finder-input"
      />
      <button onClick={handleButtonClick} className="meaning-finder-button">
        Find Meaning
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>Predicted Age:</strong> {result.age}</p>
          <p><strong>Count:</strong> {result.count}</p>
        </div>
      )}
    </div>
  );
}

export default MeaningFinder;
