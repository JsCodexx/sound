import axios from "axios";

export const NotificationData = () => {
  try {
    const res = axios.create(
      "https://sound-backend.vercel.app/notification-settings/",
    );
    console.log(res, "notify");
    return res;
  } catch (error) {
    alert(error);
  }
};
