import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiCloseCircleLine, RiCheckboxCircleFill } from "react-icons/ri";

import sendExpense from "../../utils/sendExpense";

export const InputExpense = ({ date, title, amount }) => {
  const [expenseData, setExpenseData] = useState({
    date,
    title,
    amount,
  });
  const [isRendered, setIsRendered] = useState(true);
  const authAccount = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    setExpenseData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleConfirmExpense = () => {
    const valueAfterSend = sendExpense(
      authAccount.id,
      expenseData.date,
      expenseData.title,
      expenseData.amount
    );

    if (valueAfterSend) {
      setIsRendered(() => false);
    }
  };

  return (
    <>
      {isRendered && (
        <div className="rounded-lg drop-shadow-sm p-6 max-w-xs border-2 border-black ">
          <div className="w-full">
            <h3 className="text-center font-bold">Confirm Input</h3>
          </div>
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              className="border-2 rounded-md mb-3 p-1"
              type="text"
              name="title"
              required={true}
              defaultValue={expenseData.title}
              onChange={handleInputChange}
            />

            <label htmlFor="expense">Expense Amount</label>
            <input
              className="border-2 rounded-md mb-5 p-1"
              type="number"
              name="expense"
              required={true}
              defaultValue={expenseData.amount}
              onChange={handleInputChange}
            />

            <label htmlFor="expense">Date</label>
            <input
              className="border-2 rounded-md mb-5 p-1"
              type="date"
              name="date"
              required={true}
              defaultValue={expenseData.date}
              onChange={handleInputChange}
            />

            <div className="button flex flex-row justify-end child:cursor-pointer child-hover:scale-110 child-hover:transition-all transition-all">
              <RiCloseCircleLine
                className="h-8 w-8 text-red-700"
                onClick={() => setIsRendered(() => false)}
              />

              <RiCheckboxCircleFill
                className="h-8 w-8 text-green-700"
                onClick={handleConfirmExpense}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
