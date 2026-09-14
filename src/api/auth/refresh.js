import axios from "axios";

export const Refresh = async () => {
  try {
    const res = await axios.post(
      "https://sound-backend.vercel.app/refresh?refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzg5Mzg3MzIyfQ.vtBe-CX7d-8z7iZNj8VWz6WERmmlf5gc6DbwaWMNZHw",
    );
    console.log(res, "refresh");
    return res;
  } catch (error) {
    alert(error);
  }
};
