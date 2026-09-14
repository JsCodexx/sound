import axios from "axios";

export const Labeldata = () => {
  try {
    const res = axios.get(
      "https://sound-backend.vercel.app/labels/?page=1&page_size=10",
    );
    console.log(res, "sound");
    return res;
  } catch (error) {
    alert(error);
  }
};
