import axios from "axios";

const fetchMemes = async () => {
  try {
    const res = await axios.get("https://api.imgflip.com/get_memes");
    return res.data.data.memes;
  } catch (error) {
    console.error("Error fetching memes", error);
    return [];
  }
};

export default fetchMemes;
