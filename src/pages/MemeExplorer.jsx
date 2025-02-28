// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import MemeCard from "../components/MemeCard";

// const MemeExplorer = () => {
//   const [memes, setMemes] = useState([]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     axios.get("https://api.imgflip.com/get_memes").then((res) => {
//       setMemes(res.data.data.memes);
//     });
//   }, []);

//   return (
//     <div className="p-6 bg-[#FEF9E1]">
//       <h1 className="text-4xl font-bold text-center mb-8 text-[#443627]">
//         🔎 Explore Memes
//       </h1>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search Memes..."
//         onChange={(e) => setQuery(e.target.value)}
//         className="w-full p-3 text-lg rounded-xl border border-gray-700 bg-gray-900 text-white
//                    placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-lg"
//       />

//       {/* Meme Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
//         {memes
//           .filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))
//           .map((meme) => (
//             <Link to={`/meme/${meme.id}`} key={meme.id}>
//               <MemeCard meme={meme} />
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default MemeExplorer;









import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MemeCard from "../components/MemeCard";

const MemeExplorer = () => {
  const [memes, setMemes] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("trending");

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      setMemes(res.data.data.memes);
    });
  }, []);

  const sortedMemes = () => {
    let filteredMemes = memes.filter((m) =>
      m.name.toLowerCase().includes(query.toLowerCase())
    );

    if (category === "trending") {
      return filteredMemes.sort((a, b) => b.width - a.width);
    } else if (category === "funny") {
      return filteredMemes.sort((a, b) => b.height - a.height);
    } else {
      return filteredMemes;
    }
  };

  return (
    <div className="p-6 bg-[#FEF9E1]">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#443627]">
        🔎 Explore Memes
      </h1>

      {/* Search and Sort */}
      <div className="flex justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Memes..."
          onChange={(e) => setQuery(e.target.value)}
          className="w-3/4 md:w-2/3 p-3 text-lg rounded-xl border border-gray-700 bg-gray-900 text-white
                     placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-lg"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="w-1/4 md:w-1/3 p-3 text-lg rounded-xl border border-gray-700 bg-gray-900 text-white
                     focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-lg"
        >
          <option value="trending">Trending</option>
          <option value="funny">Funny</option>
          <option value="random">Random</option>
        </select>
      </div>

      {/* Meme Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {sortedMemes().map((meme) => (
          <Link to={`/meme/${meme.id}`} key={meme.id}>
            <MemeCard meme={meme} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MemeExplorer;