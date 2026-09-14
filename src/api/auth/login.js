import axios from "axios";

export const Loginapi = async (email, password) => {
  try {
    const res = await axios.post(
      "https://sound-backend.vercel.app/login",
      {
        email: email,
        password: password,
        expiresInMins: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(res.data, "res");
    return res.data;
  } catch (error) {
    alert("wraong password and email");
  }
};
