const TableBody = ({ tableData, columns }) => {
  console.log(tableData);
  return (
    <tbody>
      {tableData.map((data, index) => {
        return (
          <tr key={index}>
            <td>{data.expenseDate}</td>;<td>{data.title}</td>;
            <td>{data.amount}</td>;
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
