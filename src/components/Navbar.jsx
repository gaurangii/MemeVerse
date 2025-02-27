import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import home from "../assets/home.png";

const Navbar = () => {
  return (
    <nav className="top-0 right-0 w-full p-6 z-50 bg-gray-900">
      <div className="flex items-center px-12">
        {/* Logo on the left */}
        <div className="w-32 h-24 flex-shrink-0">
          <img src={logo} alt="MemeVerse Logo" className="h-full w-auto" />
        </div>

        {/* Navigation container pushed to the right */}
        <div className="ml-auto flex space-x-12 font-bold text-2xl text-white items-center">
          <Link to="/">
            <img src={home} alt="Home" className="w-8 h-10" />
          </Link>
          <Link to="/explorer" className="hover:text-gray-300">Explore</Link>
          <Link to="/upload" className="hover:text-gray-300">Upload</Link>
          <Link to="/leaderboard" className="hover:text-gray-300">Leaderboard</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

