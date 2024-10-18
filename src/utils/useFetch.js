import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);      // To store the fetched data
  const [loading, setLoading] = useState(true); // To indicate loading state
  const [error, setError] = useState(null);     // To capture any errors

  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(url); // Fetching data from URL
        if (!response.ok) {
          throw new Error('Failed to fetch'); // Throw error if response is not ok
        }
        const result = await response.json(); // Parse the response data
        setData(result);                      // Store the data in state
      } catch (error) {
        setError(error);                      // Set error if any
      } finally {
        setLoading(false);                    // End loading after fetch
      }
    };

    fetchData(); // Call the fetch function when the component is mounted
  }, [url]); // Run the effect when the URL changes

  return { data, loading, error }; // Return the data, loading state, and error state
};

export default useFetch;
