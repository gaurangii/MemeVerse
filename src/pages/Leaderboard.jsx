// // const Leaderboard = () => {
// //   return (
// //     <div className="p-6">
// //       <h1 className="text-4xl font-bold text-center mb-6">🏆 Meme Leaderboard</h1>
// //       <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
// //         <p className="text-white text-lg">🥇 User1 - 100 Likes</p>
// //         <p className="text-white text-lg">🥈 User2 - 90 Likes</p>
// //         <p className="text-white text-lg">🥉 User3 - 85 Likes</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Leaderboard;











// import { useEffect, useState } from "react";
// import axios from "axios";

// const Leaderboard = () => {
//   const [memes, setMemes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMemes = async () => {
//       try {
//         const response = await axios.get("https://api.example.com/memes");
//         setMemes(response.data);
//       } catch (error) {
//         console.error("Error fetching memes:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMemes();
//   }, []);

//   const mostLiked = [...memes].sort((a, b) => b.likes - a.likes).slice(0, 10);
//   const userRanking = [...memes].sort((a, b) => b.userScore - a.userScore).slice(0, 10);

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">🏆 Leaderboard</h1>
//       {loading ? (
//         <p className="text-center text-xl">Loading memes...</p>
//       ) : (
//         <>
//           <section className="mb-10">
//             <h2 className="text-3xl font-semibold text-yellow-300 mb-4">🔥 Most Liked Memes</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {mostLiked.map((meme) => (
//                 <div key={meme.id} className="p-4 bg-gray-800 rounded-lg shadow-lg">
//                   <img src={meme.image} alt={meme.name} className="w-full rounded-lg" />
//                   <p className="mt-2 text-xl font-semibold">{meme.name}</p>
//                   <p className="text-yellow-400">❤️ {meme.likes} Likes</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section>
//             <h2 className="text-3xl font-semibold text-yellow-300 mb-4">👑 User Ranking</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {userRanking.map((meme) => (
//                 <div key={meme.id} className="p-4 bg-gray-800 rounded-lg shadow-lg">
//                   <img src={meme.image} alt={meme.name} className="w-full rounded-lg" />
//                   <p className="mt-2 text-xl font-semibold">{meme.name}</p>
//                   <p className="text-yellow-400">⭐ {meme.userScore} Points</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </>
//       )}
//     </div>
//   );
// };

// export default Leaderboard;











import { useState } from "react";

const memes = [
  { id: 14, likes: 98, comments: 3 },
  { id: 2, likes: 97, comments: 0 },
  { id: 8, likes: 93, comments: 3 },
  { id: 19, likes: 92, comments: 2 },
  { id: 7, likes: 89, comments: 4 },
  { id: 1, likes: 87, comments: 1 },
];

const users = [
  { id: 3, uploads: 9, likes: 409 },
  { id: 1, uploads: 6, likes: 231 },
  { id: 2, uploads: 3, likes: 185 },
  { id: 4, uploads: 1, likes: 28 },
  { id: 5, uploads: 8, likes: 0 },
];

const icons = [
  "\ud83c\udfc6", // Trophy
  "\ud83e\udd47", // Silver medal
  "\ud83e\udd48", // Bronze medal
  "\ud83c\udf08", // Ribbon
  "\ud83c\udf08", // Ribbon
  "\ud83c\udf08", // Ribbon
];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("Top Memes");

  return (
    <>
    <div className="p-6 bg-[#FEF9E1]">
    <div className="min-h-screen text-white flex justify-center items-center">
      <div className="w-full max-w-lg">
        <h1 className="text-6xl mb-12 font-bold text-black text-center">Leaderboard</h1>
        <div className="mt-4 flex border border-gray-600 rounded-lg overflow-hidden">
          <button
            className={`flex-1 p-2 ${
              activeTab === "Top Memes" ? "bg-gray-700" : "bg-gray-900"
            }`}
            onClick={() => setActiveTab("Top Memes")}
          >
            Top Memes
          </button>
          <button
            className={`flex-1 p-2 ${
              activeTab === "Top Users" ? "bg-gray-700" : "bg-gray-900"
            }`}
            onClick={() => setActiveTab("Top Users")}
          >
            Top Users
          </button>
        </div>
        {activeTab === "Top Memes" && (
          <div className="mt-6 bg-gray-900 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-center">Most Popular Memes</h2>
            <ul className="mt-4 space-y-4">
              {memes.map((meme, index) => (
                <li key={meme.id} className="flex items-center space-x-4">
                  <span className="text-xl">{icons[index]}</span>
                  <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                  <div>
                    <p className="font-semibold">Meme {meme.id}</p>
                    <p className="text-gray-400 text-sm">{meme.likes} likes • {meme.comments} comments</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "Top Users" && (
          <div className="mt-6 bg-gray-900 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-center">Top Contributors</h2>
            <ul className="mt-4 space-y-4">
              {users.map((user, index) => (
                <li key={user.id} className="flex items-center space-x-4">
                  <span className="text-xl">{icons[index]}</span>
                  <div className="w-12 h-12 bg-gray-700 rounded-full border-2 border-purple-400"></div>
                  <div>
                    <p className="font-semibold">User {user.id}</p>
                    <p className="text-gray-400 text-sm">{user.uploads} uploads • {user.likes} likes received</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
    </>
  );
}

