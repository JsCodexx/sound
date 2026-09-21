import axios from "axios";

export const ForgetApi = async (email) => {
  console.log(email)
  try {
    const res = await axios.post(
      `https://sound-backend.vercel.app/forgot-password?email=${email}`,
    );
    console.log(res, "refresh");
    return res;
  } catch (error) {
    console.log(error);
  }
};
