import { useState } from "react";

const UploadMeme = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">📤 Upload Meme</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          className="border p-3 w-full rounded-lg shadow-md bg-gray-800 text-white"
        />
        {image && <img src={image} alt="Meme preview" className="mt-4 max-w-full rounded-lg" />}
      </div>
    </div>
  );
};

export default UploadMeme;
