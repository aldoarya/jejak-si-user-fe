import axios from "axios";
import toast from "react-hot-toast";

export default async function getTrackedEventID(userId, callback) {
  const env = process.env.NODE_ENV;
  const endpoint =
    env == "development"
      ? process.env.NEXT_PUBLIC_ENDPOINT_URL_DEV
      : process.env.NEXT_PUBLIC_ENDPOINT_URL_PROD;
  try {
    axios
      .get(endpoint + "/track/" + userId)
      .then((respons) => {
        callback(respons.data);

        return respons.data;
      })
      .catch((err) => {
        toast.error("Error when Fetching Track Data");
        console.log(err);
      });
  } catch (err) {
    console.log(err);
    return 0;
  }
}
