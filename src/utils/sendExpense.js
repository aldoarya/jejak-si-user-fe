import axios from "axios";
import toast from "react-hot-toast";

export default function sendExpense(userId, expenseDate, title, amount) {
  const expenseInput = {
    userId,
    expenseDate,
    title,
    amount,
  };

  try {
    console.log(process.env.NEXT_PUBLIC_ENDPOINT_URL);
    console.log(expenseInput);
    axios
      .post(process.env.NEXT_PUBLIC_ENDPOINT_URL + "/expense", expenseInput)
      .then((respons) => {
        if (respons.data) {
          toast.success("Success Adding Expense Data");
        }
      })
      .catch((err) => {
        toast.error("Error when Adding Expense Data");

        console.log(err);
      });

    return 1;
  } catch (err) {
    console.log(err);
    return 0;
  }
}
