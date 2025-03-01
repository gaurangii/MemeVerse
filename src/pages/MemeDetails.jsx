import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

function MemeDetails() {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);
  const [likes, setLikes] = useState(651);
  const [comments, setComments] = useState(["Nice meme!"]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const memeData = data.data.memes.find((m) => m.id === id);
        setMeme(memeData);
      })
      .catch((err) => console.error("Fetch Error:", err));
  }, [id]);

  const handleLike = () => setLikes(likes + 1);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  // List of Related Memes (Excluding Current Meme)
  const allMemes = [
    { id: "181913649", name: "Drake Hotline Bling", likes: 451, comments: 50, img: "https://i.imgflip.com/30b1gx.jpg" },
    { id: "112126428", name: "Distracted Boyfriend", likes: 902, comments: 45, img: "https://i.imgflip.com/1ur9b0.jpg" },
    { id: "87743020", name: "Two Buttons", likes: 600, comments: 30, img: "https://i.imgflip.com/1g8my4.jpg" },
    { id: "61579", name: "One Does Not Simply", likes: 720, comments: 35, img: "https://i.imgflip.com/1bij.jpg" },
    { id: "101470", name: "Ancient Aliens", likes: 580, comments: 28, img: "https://i.imgflip.com/26am.jpg" },
    { id: "123999232", name: "The Scroll of Truth", likes: 675, comments: 40, img: "https://i.imgflip.com/1xkz4.jpg" },
    { id: "195389", name: "Futurama Fry", likes: 689, comments: 38, img: "https://i.imgflip.com/1bgw.jpg" },
    { id: "61520", name: "Hide the Pain Harold", likes: 750, comments: 55, img: "https://i.imgflip.com/2hgfw.jpg" },
  ];

  const filteredMemes = allMemes.filter((m) => m.id !== id).slice(0, 6); // Exclude selected meme

  if (!meme) return <h2 className="text-center text-gray-500 dark:text-white">Loading...</h2>;

  return (
    <>
    <div className="bg-[#FEF9E1]">
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-3 gap-8">
      {/* Left Side: Meme & Comments */}
      <div className="col-span-2 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <img src={meme.url} alt={meme.name} className="rounded-lg shadow-md w-full" />

        {/* Like, Comment, Share */}
        <div className="flex justify-between items-center mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <button onClick={handleLike} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-red-500">
            <Heart className="w-6 h-6" /> {likes}
          </button>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <MessageCircle className="w-6 h-6" /> {comments.length}
          </div>
          <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-500">
            <Share2 className="w-6 h-6" /> Share
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Comments</h2>

          <form onSubmit={handleCommentSubmit} className="mt-4 flex">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
            />
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Post
            </button>
          </form>

          <div className="mt-4 space-y-3">
            {comments.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No comments yet. Be the first!</p>
            ) : (
              comments.map((comment, index) => (
                <div key={index} className="p-3 bg-gray-100 text-white dark:bg-gray-800 rounded-lg">
                  {comment}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Right Side: Related Memes */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Related Memes</h2>
        <div className="mt-4 space-y-3">
          {filteredMemes.map((meme) => (
            <Link
              key={meme.id}
              to={`/meme/${meme.id}`}
              className="flex items-center gap-3 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <img src={meme.img} alt={meme.name} className="w-12 h-12 rounded-md" />
              <div className="flex-1">
                <h3 className="text-gray-900 dark:text-white">{meme.name}</h3>
                <div className="flex gap-4 text-gray-600 dark:text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-500" /> {meme.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-blue-500" /> {meme.comments}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default MemeDetails;
