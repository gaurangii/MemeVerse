// import { useEffect, useState } from "react";
// import axios from "axios";
// import landingmeme from "../assets/landingmeme.png";
// import { TypeAnimation } from 'react-type-animation';

// const Home = () => {
//   const [memes, setMemes] = useState([]);

//   useEffect(() => {
//     axios.get("https://api.imgflip.com/get_memes").then((res) => {
//       setMemes(res.data.data.memes.slice(0, 9));
//     });
//   }, []);
  

//   return (
//     <>
//     <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'Love Memes?',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         'We got you hooked',
//         1000,
//         'Laugh. Share. Create. with',
//         1000,
//         'MemeVerse',
//         1000
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: '2em', display: 'inline-block' }}
//       repeat={Infinity}
//     />
   
//     <div className="flex flex-row justify-between items-center h-full px-24 mt-16">
//           {/* Text Section */}
//           <div className="text-black ">
//             <h1 className="font-bold ml-34 text-6xl">Welcome to</h1>
//             <h1 className="font-bold text-6xl ml-34 mt-12 mb-8 text-yellow-400">MemeVerse</h1>
//             <span className='text-xl ml-28 mb-18'>Find the perfect candidate effortlessly. </span>
//             <p className='text-lg ml-10 mb-8'>
//               OptiHire analyzes resumes, evaluates skills, and ranks applicants to match your job requirements with precision.
//               Streamline hiring with AI-powered efficiency. 🚀
//             </p>
//           </div>

//           {/* Image Section */}
//           <img src={landingmeme} alt="meme" className="w-2/5 h-auto " />
//         </div>
  
//     <div className="p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">🔥 Trending Memes 🔥</h1>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {memes.map((meme) => (
//           <div key={meme.id} className="bg-gray-900 p-4 rounded-lg shadow-lg">
//             <img src={meme.url} alt={meme.name} className="rounded-lg w-full" />
//             <h2 className="text-lg font-semibold text-white mt-2">{meme.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Home;












import { useEffect, useState } from "react";
import axios from "axios";
import landingmeme from "../assets/landingmeme.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      setMemes(res.data.data.memes.slice(0, 9));
    });
  }, []);

  return (
    <>
    <div className="bg-[#FEF9E1]">
      {/* Hero Section */}
      <div className="flex flex-row justify-between items-center h-full px-24 ml-8 ">
        {/* Text Section */}
        <div className="text-black">
          <TypeAnimation
            sequence={[
              "Scroll. Laugh. Repeat.",
              1000,
              "Where Memes Never Die!",
              1000,
              "Welcome to MemeVerse!!",
              1000,
            ]}
            
            
            wrapper="h1"
            speed={50}
            className="font-bold text-6xl text-[#443627]"
            repeat={Infinity}
          />
        </div>

        {/* Image Section */}
        <img src={landingmeme} alt="meme" className="display-inline w-3/6 h-screen" />
      </div>

     

      {/* Trending Memes Section */}
      <div className="p-6 mt-12">
  <h1 className="text-6xl font-bold text-center mb-12 text-[#443627]">
    🔥 Trending Memes 🔥
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {memes.map((meme) => (
      <div 
        key={meme.id} 
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
    ))}
  </div>


<div className="mt-24 mb-40 ml-26 text-center">
    <a 
      href="/explorer" 
      className="bg-green-200 text-black font-semibold px-6 py-3 rounded-xl text-lg hover:bg-yellow-500 transition-all duration-300"
    >
      Explore More Memes
    </a>
  </div>
  </div>
      </div>
    </>
  );
};

export default Home;

