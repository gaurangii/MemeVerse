import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MemeExplorer from "./pages/MemeExplorer";
import UploadMeme from "./pages/UploadMeme";
import MemeDetails from "./pages/MemeDetails";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<MemeExplorer />} />
        <Route path="/upload" element={<UploadMeme />} />
        <Route path="/meme/:memeID" element={<MemeDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
