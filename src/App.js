import React, { useEffect, useState } from "react";

function App() {
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryObject = {};
    for (const [key, value] of params.entries()) {
      queryObject[key] = value;
    }
    setQueryParams(queryObject);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React App with Query Parameters</h1>
      <button onClick={() => alert("Button Clicked!")}>Click Me</button>
      <h3>Query Parameters:</h3>
      {Object.keys(queryParams).length > 0 ? (
        <ul>
          {Object.entries(queryParams).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      ) : (
        <p>No query parameters found.</p>
      )}
    </div>
  );
}

export default App;
