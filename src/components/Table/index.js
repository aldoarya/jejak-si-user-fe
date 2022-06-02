import { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ data }) => {
  const columns = [
    { label: "Date", accessor: "date", sortable: true },
    { label: "Event Name", accessor: "date", sortable: true },
    { label: "Event Category", accessor: "item", sortable: false },
    { label: "Event Action", accessor: "expense", sortable: true },
    { label: "Event Label", accessor: "expense", sortable: true },
    { label: "Event Property", accessor: "expense", sortable: true },
    { label: "Event Value", accessor: "expense", sortable: true },
  ];

  return (
    <>
      <table className="table w-full ">
        <caption>Your Tracking History</caption>
        <TableHead columns={columns} />
        <TableBody columns={columns} tableData={data} />
      </table>
    </>
  );
};

export default Table;
