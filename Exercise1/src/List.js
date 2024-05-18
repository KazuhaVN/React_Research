import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import React from "react-router-dom";
export default function List(props) {
  const customers = props.customers;
  const setCustomers = props.setCustomers;
  const { setIndex, setOpen } = props;
  function handleDelete(index) {
    let id = customers[index].id;
    let newCustomers = customers.filter((c) => {
      return c.id !== id;
    }); /* !== also check the type */
    setCustomers(newCustomers);
  }
  function handleEdit(index) {
    setIndex(index);
    setOpen(true);
  }

  function TableCustomer(customers, onDelete, onEdit) {
    return (
      <>
        {customers.map((c, index) => (
          <TableRow>
            <TableCell>{c.id}</TableCell>
            <TableCell>{c.name}</TableCell>
            <TableCell>{c.birthday}</TableCell>
            <TableCell>{c.mssv}</TableCell>
            <TableCell>{c.email}</TableCell>
            <TableCell>
              <button onClick={() => onDelete(index)}>Xóa</button>
            </TableCell>
            <TableCell>
              <button onClick={() => onEdit(index)}>Edit</button>
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }

  return (
    <>
      <div>List of customers</div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> ID</TableCell>
            <TableCell> Họ và Tên</TableCell>
            <TableCell> Ngày sinh</TableCell>
            <TableCell> MSSV </TableCell>
            <TableCell> Email</TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers ? TableCustomer(customers, handleDelete, handleEdit) : ""}
        </TableBody>
      </Table>
    </>
  );
}
