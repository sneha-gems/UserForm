import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import AppContext from "./AppContext";
import CusTable from "./CusTable";

export default function Listing() {
  const { loading } = useContext(AppContext);

  return <>{loading === true ? <CircularProgress /> : <CusTable />}</>;
}
