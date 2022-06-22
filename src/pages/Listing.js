import { useSelector } from "react-redux";
import CusTable from "../comsponents/CusTable";

export default function Listing() {
  const { data } = useSelector((state) => state.addData);
  return <CusTable />;
}
