import { useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "User 1",
    username: "user1",
    bio: "This is the bio for User 1",
    uploads: 1,
    likes: 5,
    profilePic: ""
  });
  const [tempProfile, setTempProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfile((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  return (
    <>
    <div className="p-6 bg-[#FEF9E1]">
    <div className="p-6 max-w-3xl mx-auto text-black">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <img src={profile.profilePic || "https://via.placeholder.com/80"} alt="Profile" className="w-20 h-20 bg-gray-600 rounded-full" />
        <div>
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-gray-400">@{profile.username}</p>
          <p className="text-sm mt-1">{profile.uploads} Uploads &nbsp; {profile.likes} Likes</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex border-b border-gray-700">
        {["profile", "uploads", "saved"].map((item) => (
          <button
            key={item}
            className={`flex-1 py-2 text-center ${
              tab === item ? "border-b-2 border-white" : "text-gray-400"
            }`}
            onClick={() => setTab(item)}
          >
            {item === "profile" ? "Profile" : item === "uploads" ? "My Uploads" : "Saved Memes"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tab === "profile" && (
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-semibold">Profile Information</h2>
            <p className="text-white mb-4">Update your profile information and how others see you on MemeVerse</p>
            
            {!isEditing ? (
              <div>
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Username:</strong> @{profile.username}</p>
                <p><strong>Bio:</strong> {profile.bio}</p>
                <button className="mt-4 w-full bg-purple-600 py-2 rounded-lg" onClick={() => setIsEditing(true)}>Edit Profile</button>
              </div>
            ) : (
              <div>
                <label className="block mb-2">Profile Picture</label>
                <input type="file" onChange={handleFileChange} className="block w-full mb-4 bg-gray-800 p-2 rounded-lg" />
                
                <label className="block mb-2">Name</label>
                <input type="text" name="name" value={tempProfile.name} onChange={handleChange} className="block w-full bg-gray-800 p-2 rounded-lg mb-4" />
                
                <label className="block mb-2">Username</label>
                <input type="text" name="username" value={tempProfile.username} onChange={handleChange} className="block w-full bg-gray-800 p-2 rounded-lg mb-4" />
                
                <label className="block mb-2">Bio</label>
                <textarea name="bio" value={tempProfile.bio} onChange={handleChange} className="block w-full bg-gray-800 p-2 rounded-lg mb-4" />
                
                <button className="w-full bg-purple-600 py-2 rounded-lg" onClick={handleSave}>Save Changes</button>
              </div>
            )}
          </div>
        )}
        {tab === "uploads" && <div className="text-center text-gray-400">No uploads yet.</div>}
        {tab === "saved" && <div className="text-center text-gray-400">No saved memes yet.</div>}
      </div>
    </div>
    </div>
    </>
  );
};

export default Profile;
