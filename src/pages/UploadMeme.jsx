// import { useState } from "react";

// const UploadMeme = () => {
//   const [image, setImage] = useState(null);

//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">📤 Upload Meme</h1>
//       <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
//           className="border p-3 w-full rounded-lg shadow-md bg-gray-800 text-white"
//         />
//         {image && <img src={image} alt="Meme preview" className="mt-4 max-w-full rounded-lg" />}
//       </div>
//     </div>
//   );
// };

// export default UploadMeme;












import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UploadMeme = ({ setProfile }) => {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [memeName, setMemeName] = useState("");
  const [caption, setCaption] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file || !memeName.trim()) return;

    const formData = new FormData();
    formData.append("meme", file);
    formData.append("name", memeName);
    formData.append("caption", caption);

    try {
      const response = await axios.post("https://api.example.com/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Upload successful:", response.data);
      
      setProfile((prevProfile) => ({
        ...prevProfile,
        uploads: prevProfile.uploads + 1,
        memes: [...(prevProfile.memes || []), { url: preview, name: memeName, caption }],
      }));
      
      setUploadMessage("🎉 Your meme has been uploaded!");
      setTimeout(() => navigate("/profile"), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="p-6 bg-[#FEF9E1] text-center">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-600"
        >
          Upload Meme
        </button>
      ) : (
        <div className="mt-6 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-yellow-400 mb-4">📤 Upload Your Meme</h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4 p-2 border border-gray-500 bg-gray-700 text-white rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Enter meme name"
            value={memeName}
            onChange={(e) => setMemeName(e.target.value)}
            className="mb-4 p-2 border border-gray-500 bg-gray-700 text-white rounded-lg w-full"
          />
          <textarea
            placeholder="Enter a caption (optional)"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="mb-4 p-2 border border-gray-500 bg-gray-700 text-white rounded-lg w-full"
          ></textarea>
          {preview && <img src={preview} alt="Preview" className="my-4 max-w-xs mx-auto rounded-lg shadow-lg" />}
          <button
            onClick={handleUpload}
            className="mt-4 px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-600"
          >
            Submit
          </button>
        </div>
      )}
      {uploadMessage && <p className="mt-4 text-green-600 font-bold">{uploadMessage}</p>}
    </div>
  );
};

export default UploadMeme;
