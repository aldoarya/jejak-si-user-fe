const TableBody = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData.map((data, index) => {
        return (
          <tr key={index}>
            <td>{data.event_name}</td>
            <td>{data.event_category}</td>
            <td>{data.event_action}</td>
            <td>{data.event_label}</td>
            <td>{data.event_property}</td>
            <td>{data.event_value}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
