import React, { useEffect, useState } from 'react';

export default function Cats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cats')
      .then(res => res.json())
      .then(data => setCats(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🐱 Cats of BITS Goa</h1>
      {cats.map(cat => (
        <div key={cat.id} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '16px',
          margin: '12px 0',
          maxWidth: '300px'
        }}>
          <h3>{cat.name}</h3>
          <img src={cat.image_url} alt={cat.name} style={{ width: '100%', borderRadius: '8px' }} />
          <p><strong>Nature:</strong> {cat.nature}</p>
        </div>
      ))}
    </div>
  );
}
