from flask import Flask, jsonify, request
from flask_cors import CORS
import cloudinary
import cloudinary.uploader

app = Flask(__name__)
CORS(app)  # ✅ CORS is required!

# ✅ Replace with your real Cloudinary credentials
cloudinary.config(
  cloud_name = "dk3gys9je",
  api_key = "471865334731272",
  api_secret = "2uKsVjz9da7WuQJPONeoEsFRNj8"
)

# ✅ Dummy data
memes = [
    {
        'id': 1,
        'image_url': 'https://placekitten.com/250/250',
        'caption': 'Library cat judging your grades 📚😹'
    }
]

# ✅ GET: all memes
@app.route('/api/memes')
def get_memes():
    return jsonify(memes)

# ✅ POST: upload + add meme
@app.route('/api/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return {'error': 'No file part'}, 400

    file = request.files['file']
    caption = request.form.get('caption', '')

    if file.filename == '':
        return {'error': 'No selected file'}, 400

    upload_result = cloudinary.uploader.upload(file)
    image_url = upload_result['secure_url']

    memes.append({
        'id': len(memes) + 1,
        'image_url': image_url,
        'caption': caption
    })

    return {'image_url': image_url, 'caption': caption}, 200

@app.route('/')
def home():
    return "Hello BITS Goa Cats!"

if __name__ == '__main__':
    app.run(debug=True)
