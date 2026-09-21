import axios from "axios";

export const Signup = async (fullname, username, email, password, role) => {
  try {
    const res = await axios.post(
      "https://sound-backend.vercel.app/user",
      {
        full_name: fullname,
        username: username,
        email: email,
        password: password,
        role: role,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return res;
  } catch (error) {
    alert(error);
  }
};
