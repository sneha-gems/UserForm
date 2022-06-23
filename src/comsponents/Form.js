import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addForm, editForm } from "../reducers/AddFormData";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import AppContext from "./AppContext";

export default function Form() {
  const dispatch = useDispatch();
  const myContext = useContext(AppContext);
  const { rowdata, setRowData, setLoading, loading } = myContext;
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
      setLoading(true);
      if (rowdata?.id || rowdata?.name) {
        dispatch(editForm(values));
      } else {
        values["id"] = uuid();
        dispatch(addForm(values));
      }
      setDefaultdata(initData);
      setRowData({});
      navigate(`/list`);
      setLoading(false);
    },
    enableReinitialize: true,
  });
  useEffect(() => {
    setDefaultdata(rowdata);
  }, [rowdata]);
  return (
    <>
      {loading === true ? (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <CircularProgress size={100} />
        </div>
      ) : (
        <>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            className="parent"
          >
            <form onSubmit={formik.handleSubmit} className="grid-item">
              <Grid item>
                <Grid item>
                  <label>Full Name </label>
                </Grid>
                <input
                  type={"text"}
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  required
                  className="input-grid"
                />
              </Grid>
              <Grid item>
                <Grid item>
                  <label>Email</label>
                </Grid>
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
                <Grid item>
                  <label>Phone Number</label>
                </Grid>
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  required
                />
              </Grid>
              <Grid
                item
                alignItems={"flex-end"}
                spacing={6}
                style={{
                  alignItems: "center",
                  //display: "flex",
                  justifyContent: "flex-end",
                  margin: "5px",
                }}
              >
                <button type="submit">submit</button>
              </Grid>
            </form>
          </Grid>
        </>
      )}

      {/* <CusTable setdata={setdata} /> */}
    </>
  );
}
