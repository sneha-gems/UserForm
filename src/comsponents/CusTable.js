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
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteData } from "../reducers/AddFormData";
import AppContext from "./AppContext";

export default function CusTable() {
  const headName = ["Id", "Name", "Email", "Phone", "Action"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state);
  const contextValue = useContext(AppContext);
  const { setRowData } = contextValue;
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
            data.map((item) => {
              return (
                <TableRow>
                  <TableCell>{item?.id}</TableCell>
                  <TableCell>{item?.name ?? "-"}</TableCell>
                  <TableCell>{item?.email}</TableCell>
                  <TableCell>{item?.phone}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        navigate("/");
                        setRowData(item);
                      }}
                    >
                      Edit
                    </Button>
                    <Button onClick={() => dispatch(deleteData(item?.id))}>
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
