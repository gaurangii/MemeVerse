import { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("https://api.example.com/leaderboard");
        setLeaders(response.data);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="p-6 bg-[#FEF9E1] text-center min-h-screen">
      <h1 className="text-4xl font-bold text-yellow-500 mb-6">🏆 Meme Leaderboard</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white max-w-3xl mx-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-yellow-400 text-lg border-b border-gray-600">
              <th className="py-2">Rank</th>
              <th className="py-2">User</th>
              <th className="py-2">Memes Uploaded</th>
              <th className="py-2">Upvotes</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-gray-700 hover:bg-gray-700 transition duration-200"
              >
                <td className="py-3 font-bold text-yellow-300">{index + 1}</td>
                <td className="py-3">{user.username}</td>
                <td className="py-3">{user.memesUploaded}</td>
                <td className="py-3">👍 {user.upvotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;