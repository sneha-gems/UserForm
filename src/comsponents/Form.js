import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addForm, editForm } from "../reducers/AddFormData";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import NavBar from "./NavBar";
import AppContext from "./AppContext";

export default function Form() {
  const dispatch = useDispatch();
  const myContext = useContext(AppContext);
  const { rowdata, setRowData } = myContext;
  const navigate = useNavigate();
  const initData = {
    id: uuid(),
    name: "",
    email: "",
    phone: "",
  };
  const [defaultdata, setDefaultdata] = useState(initData);
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.number().required("Required"),
  });
  const formik = useFormik({
    initialValues: defaultdata || initData,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      if (rowdata?.id || rowdata?.name) {
        dispatch(editForm(values));
      } else {
        values["id"] = uuid();
        dispatch(addForm(values));
      }
      setDefaultdata(initData);
      setRowData({});
      navigate(`/list`);
    },
    enableReinitialize: true,
  });
  useEffect(() => {
    setDefaultdata(rowdata);
  }, [rowdata]);
  return (
    <>
      <NavBar />
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className="parent"
      >
        <form onSubmit={formik.handleSubmit} className="grid-item">
          <Grid item>
            <div>
              <label>Full Name </label>
              <input
                type={"text"}
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                required
                className="input-grid"
              />
            </div>
          </Grid>
          <Grid item>
            <label>Email</label>
            <input
              id="email"
              name="email"
              type={"text"}
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
          </Grid>
          <Grid item>
            <label>Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.phone}
              required
            />
          </Grid>
          <button type="submit">submit</button>
        </form>
      </Grid>
      {/* <CusTable setdata={setdata} /> */}
    </>
  );
}
