import React, { useState } from 'react';

export default function Submit() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('caption', caption);

    try {
        const res = await fetch('http://127.0.0.1:5000/api/upload', {
            method: 'POST',
            body: formData,
        });


      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setUploadedUrl(data.image_url);
        alert('Upload successful!');
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to connect to backend.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>✏️ Submit a Cat or Meme</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Choose Image:</label><br />
          <input type="file" onChange={e => setFile(e.target.files[0])} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Caption:</label><br />
          <input
            type="text"
            value={caption}
            onChange={e => setCaption(e.target.value)}
            placeholder="Funny caption..."
          />
        </div>
        <button type="submit" style={{ marginTop: '15px' }}>Upload</button>
      </form>

      {uploadedUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Uploaded Image:</h3>
          <img src={uploadedUrl} alt="Uploaded" style={{ width: '300px' }} />
          <p><strong>Caption:</strong> {caption}</p>
        </div>
      )}
    </div>
  );
}
