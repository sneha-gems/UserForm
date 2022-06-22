import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../reducers/AddFormData";

export default function CusTable({ setdata }) {
  const headName = ["Id", "Name", "Email", "Phone", "Action"];
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.addData);
  //   const data2 = JSON.parse(localStorage.getItem("list") || []);
  //   const data = [data2];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headName.map((item) => {
              return <TableCell>{item}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((item, index) => {
              return (
                <TableRow>
                  <TableCell>{1}</TableCell>
                  <TableCell>{item?.name ?? "-"}</TableCell>
                  <TableCell>{item?.email}</TableCell>
                  <TableCell>{item?.phone}</TableCell>
                  <TableCell>
                    <Button onClick={() => setdata(data[index])}>Edit</Button>
                    <Button onClick={() => dispatch(deleteData())}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
