import React, { useEffect, useState } from 'react';

export default function Memes() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/memes')
      .then(res => res.json())
      .then(data => setMemes(data));
  }, []);

  return (
    <div>
      <h1>Cat Memes 😹</h1>
      {memes.map(meme => (
        <div key={meme.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
          <img src={meme.image_url} alt="meme" width="250" />
          <p>{meme.caption}</p>
        </div>
      ))}
    </div>
  );
}
