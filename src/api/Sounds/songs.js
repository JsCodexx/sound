import axios from "axios";

export const Songs = () => {
  const token = localStorage.getItem("token");
  const session = sessionStorage.getItem("refresh")
  console.log(token,"token")
  try {
    const res = axios.get(
      "https://sound-backend.vercel.app/songs",
      {
        headers: {
          Authorization: `bearer ${token}`,
          "X-Refresh-Token":session
        },
        withCredentials: true,
      },
    );
    console.log(res, "song");
    return res;
  } catch (error) {
    alert(error);
  }
};
