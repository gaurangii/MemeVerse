const Leaderboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🏆 Meme Leaderboard</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
        <p className="text-white text-lg">🥇 User1 - 100 Likes</p>
        <p className="text-white text-lg">🥈 User2 - 90 Likes</p>
        <p className="text-white text-lg">🥉 User3 - 85 Likes</p>
      </div>
    </div>
  );
};

export default Leaderboard;
