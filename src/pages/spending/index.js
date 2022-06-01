import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DashboardLayout } from "../../components/Layout";

import Table from "../../components/Table";
import getExpenseByID from "../../utils/getExpensesByID";

export default function Spending() {
  const [expensesData, setExpensesData] = useState([]);
  const authAccount = useSelector((state) => state.auth);

  useEffect(() => {
    getExpenseByID(authAccount.id, (data) => {
      setExpensesData(() => data);
    });

    // console.log(expensesData);
  }, []);

  return (
    <>
      <div>Spending</div>
      <Table data={expensesData} />
    </>
  );
}

Spending.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
