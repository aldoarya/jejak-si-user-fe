import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ data }) => {
  const [tableData, setTableData] = useState(data);

  const columns = [
    { label: "Date", accessor: "date", sortable: true },
    { label: "Item", accessor: "item", sortable: false },
    { label: "Expense Amount", accessor: "expense", sortable: true },
  ];

  return (
    <>
      <table className="table">
        <caption>Your Spending History</caption>
        <TableHead columns={columns} />
        <TableBody columns={columns} tableData={data} />
      </table>
    </>
  );
};

export default Table;
