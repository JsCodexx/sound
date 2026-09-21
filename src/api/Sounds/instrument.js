import axios from "axios";

export const Instrument = () => {
  const token = localStorage.getItem("token");
  const session = sessionStorage.getItem("refresh");
  try {
    const res = axios.get(
      "https://sound-backend.vercel.app/instruments/categories?page=1&page_size=10",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Refresh-Token": session,
        },
        withCredentials: true,
      },
    );
    console.log(res, "instrument");
    return res;
  } catch (error) {
    alert(error);
  }
};
