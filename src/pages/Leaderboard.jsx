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

