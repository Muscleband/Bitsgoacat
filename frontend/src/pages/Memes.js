import React, { useEffect, useState } from 'react';

export default function Memes() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/memes')
      .then(res => res.json())
      .then(data => setMemes(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>😹 Cat Memes</h1>
      {memes.map(meme => (
        <div key={meme.id} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '16px',
          margin: '12px 0',
          maxWidth: '300px'
        }}>
          <img src={meme.image_url} alt="meme" style={{ width: '100%', borderRadius: '8px' }} />
          <p>{meme.caption}</p>
        </div>
      ))}
    </div>
  );
}
