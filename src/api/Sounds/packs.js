import axios from "axios";

export const Packdata = () => {
  try {
    const res = axios.get(
      "https://sound-backend.vercel.app/packs/?page=1&page_size=10",
    );
    console.log(res, "sound");
    return res;
  } catch (error) {
    alert(error);
  }
};
