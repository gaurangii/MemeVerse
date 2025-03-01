import { useState, useEffect } from "react";
import axios from "axios";

const UploadMeme = ({ setProfile }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [memeName, setMemeName] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]); // Get only Base64 content
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = async () => {
    if (!file || !memeName.trim()) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const base64Image = await convertToBase64(file);
      const formData = new FormData();
      formData.append("key", "81cf766ecf0d12b70683d1b08cece0d7");
      formData.append("image", base64Image);
      formData.append("name", memeName);

      const response = await axios.post("https://api.imgbb.com/1/upload", formData);

      console.log("Upload successful:", response.data);
      const imageUrl = response.data.data.url;

      if (setProfile) {
        setProfile((prevProfile) => ({
          ...prevProfile,
          uploads: (prevProfile.uploads || 0) + 1,
          memes: [...(prevProfile.memes || []), { url: imageUrl, name: memeName }],
        }));
      }

      setUploadMessage("🎉 Your meme has been uploaded!");

      setTimeout(() => {
        setUploadMessage("");
        setFile(null);
        setPreview(null);
        setMemeName("");
      }, 5000);
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      alert("Upload Failed. Please try again.");
    }
  };

  return (
    <div className="p-8 bg-[#FEF9E1] min-h-screen flex flex-col justify-center items-center">
      <div className="p-6 bg-gray-800 text-white rounded-xl shadow-xl w-full max-w-md relative">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 text-center">📤 Upload Your Meme</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 p-3 border border-gray-500 bg-gray-700 text-white rounded-lg w-full cursor-pointer"
        />
        <input
          type="text"
          placeholder="Enter meme name"
          value={memeName}
          onChange={(e) => setMemeName(e.target.value)}
          className="mb-4 p-3 border border-gray-500 bg-gray-700 text-white rounded-lg w-full"
        />
        {preview && <img src={preview} alt="Preview" className="my-4 max-w-full mx-auto rounded-lg shadow-lg" />}
        <button
          onClick={handleUpload}
          className="w-full px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          Submit
        </button>
        {uploadMessage && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-green-500 text-white text-center font-bold rounded-lg shadow-lg animate-fadeIn">
            {uploadMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadMeme;
