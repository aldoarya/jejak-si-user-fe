import axios from "axios";
import toast from "react-hot-toast";

export default async function sendExpense(userId, callback) {
  try {
    axios
      .get(process.env.NEXT_PUBLIC_ENDPOINT_URL + "/expense/" + userId)
      .then((respons) => {
        callback(respons.data);

        return respons.data;
      })
      .catch((err) => {
        toast.error("Error when Adding Expense Data");

        console.log(err);
      });
  } catch (err) {
    console.log(err);
    return 0;
  }
}
