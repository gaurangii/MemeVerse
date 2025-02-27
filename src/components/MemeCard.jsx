const MemeCard = ({ meme }) => {
  return (
    <div
      className="group relative bg-gray-800 p-5 rounded-xl shadow-lg transition-all 
                 duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Meme Image */}
      <img
        src={meme.url}
        alt={meme.name}
        className="rounded-lg w-full h-56 object-cover"
      />

      {/* Meme Name */}
      <h2 className="text-lg font-semibold text-gray-100 mt-3 text-center">
        {meme.name}
      </h2>

      {/* Subtle Overlay Effect */}
      <div className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default MemeCard;
