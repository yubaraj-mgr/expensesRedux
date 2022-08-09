import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions } from "../SliceAndAction/transactions/TransactionsAction";

const DashboardTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransactions());
  }, []);
  const { transactions } = useSelector((state) => state.TransactionSlice);
  return (
    <Table striped bordered hover className="mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Expenses</th>
          <th>Income</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DashboardTable;
