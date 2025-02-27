const MemeDetails = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center p-6">
      {/* Main Meme Section */}
      <div className="max-w-4xl w-full flex gap-6">
        {/* Left Section - Meme Display */}
        <div className="bg-[#222] p-4 rounded-xl w-3/4">
          <div className="w-full h-[400px] bg-gray-800 flex items-center justify-center rounded-lg">
            <p className="text-gray-400">[Meme Image Placeholder]</p>
          </div>
          <p className="text-lg font-semibold mt-3">This is a caption for meme 17</p>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-3 text-gray-400 text-lg">
            <span>❤️</span>
            <span>💬</span>
            <span>🔗</span>
            <span>🔖</span>
            <span>🚩</span>
          </div>
        </div>

        {/* Right Section - Meme Info */}
        <div className="bg-[#222] p-4 rounded-xl w-1/4">
          <h2 className="text-xl font-bold">Meme 17</h2>
          <p className="text-gray-400 text-sm">Posted by User 5 • 5 days ago</p>
          <p className="mt-2">💖 69 likes • 💬 2 comments</p>
          <p className="mt-3 text-gray-300">This is a detailed description for meme 17</p>

          {/* Tags */}
          <div className="flex gap-2 mt-3">
            <span className="bg-purple-600 px-3 py-1 text-sm rounded-lg">#classic</span>
            <span className="bg-gray-600 px-3 py-1 text-sm rounded-lg">#2024</span>
          </div>

          {/* Related Memes */}
          <h3 className="mt-6 text-lg font-semibold">Related Memes</h3>
          <div className="mt-3 bg-gray-700 p-3 rounded-lg flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-500 rounded-lg"></div>
            <div>
              <p className="text-white">Meme 8</p>
              <p className="text-gray-400 text-sm">96 likes • 3 comments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section (Aligned Below Meme & Details) */}
      <div className="mt-6 max-w-4xl w-full">
        <h2 className="text-xl font-semibold">Comments</h2>

        {/* Comment Input */}
        <div className="mt-3 bg-[#222] p-4 rounded-lg">
          <textarea
            placeholder="Add a comment..."
            className="w-full bg-[#333] p-3 text-white rounded-lg border border-gray-600 focus:outline-none"
            rows="2"
          />
          <button className="mt-2 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition">
            Post Comment
          </button>
        </div>

        {/* Comments List */}
        <div className="mt-4 space-y-4">
          <div className="flex gap-3 items-start bg-[#222] p-3 rounded-lg">
            <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
            <div>
              <p className="text-white font-medium">User 1 <span className="text-gray-400 text-sm">3 days ago</span></p>
              <p className="text-gray-300">This is comment 1 on meme 17</p>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-[#222] p-3 rounded-lg">
            <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
            <div>
              <p className="text-white font-medium">User 2 <span className="text-gray-400 text-sm">9 days ago</span></p>
              <p className="text-gray-300">This is comment 2 on meme 17</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeDetails;
