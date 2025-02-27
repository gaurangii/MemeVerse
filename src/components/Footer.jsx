import logo from "../assets/logo.png";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
          
          {/* Left Section - Logo & Tagline */}
          <div className="text-center md:text-left">
            <img src={logo} alt="logo" className="w-32 h-28" />
            <h1 className="text-3xl font-bold text-yellow-400">MemeVerse</h1>
            <p className="text-sm mt-2">Laugh. Share. Create. The Meme Universe! 🚀</p>
          </div>
  
          {/* Center - Navigation Links */}
          <nav className="flex space-x-6 my-4 md:my-0">
            <a href="/" className="hover:text-yellow-400 transition">Home</a>
            <a href="/explore" className="hover:text-yellow-400 transition">Explore</a>
            <a href="/upload" className="hover:text-yellow-400 transition">Upload</a>
            <a href="/leaderboard" className="hover:text-yellow-400 transition">Leaderboard</a>
            <a href="/profile" className="hover:text-yellow-400 transition">Profile</a>
          </nav>
  
          {/* Right Section - Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition text-xl">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} MemeVerse. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  