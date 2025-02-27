// // import { useState, useEffect } from "react";
// // import axios from "axios";

// // const MemeExplore = () => {
// //   const [memes, setMemes] = useState([]);
// //   const [query, setQuery] = useState("");

// //   useEffect(() => {
// //     axios.get("https://api.imgflip.com/get_memes").then((res) => {
// //       setMemes(res.data.data.memes);
// //     });
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-4xl font-bold text-center mb-6">🔎 Explore Memes</h1>
// //       <input
// //         type="text"
// //         placeholder="Search Memes..."
// //         onChange={(e) => setQuery(e.target.value)}
// //         className="border p-3 w-full rounded-lg shadow-md"
// //       />
// //       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
// //         {memes
// //           .filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))
// //           .map((meme) => (
// //             <div key={meme.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
// //               <img src={meme.url} alt={meme.name} className="rounded-lg w-full" />
// //               <h2 className="text-lg font-semibold text-white mt-2">{meme.name}</h2>
// //             </div>
// //           ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MemeExplore;









// import { useState, useEffect } from "react";
// import axios from "axios";

// const MemeExplore = () => {
//   const [memes, setMemes] = useState([]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     axios.get("https://api.imgflip.com/get_memes").then((res) => {
//       setMemes(res.data.data.memes);
//     });
//   }, []);

//   return (
//     <div className="p-6">
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
//             <div 
//               key={meme.id} 
//               className="group relative bg-gray-800 p-5 rounded-xl shadow-lg transition-all 
//                          duration-300 hover:scale-105 hover:shadow-2xl"
//             >
//               {/* Meme Image */}
//               <img 
//                 src={meme.url} 
//                 alt={meme.name} 
//                 className="rounded-lg w-full h-56 object-cover"
//               />

//               {/* Meme Name */}
//               <h2 className="text-lg font-semibold text-gray-100 mt-3 text-center">
//                 {meme.name}
//               </h2>

//               {/* Subtle Overlay Effect */}
//               <div className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default MemeExplore;













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
//     <div className="p-6">
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

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      setMemes(res.data.data.memes);
    });
  }, []);

  return (
    <div className="p-6 bg-[#FEF9E1]">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#443627]">
        🔎 Explore Memes
      </h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Memes..."
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 text-lg rounded-xl border border-gray-700 bg-gray-900 text-white
                   placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-lg"
      />

      {/* Meme Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {memes
          .filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))
          .map((meme) => (
            <Link to={`/meme/${meme.id}`} key={meme.id}>
              <MemeCard meme={meme} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MemeExplorer;
