import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../reducers/AddFormData";
import CusTable from "./CusTable";
import * as Yup from "yup";
import { useState } from "react";

export default function Form() {
  const dispatch = useDispatch();
  const initData = {
    id: "1",
    name: "",
    email: "",
    phone: "",
  };
  const { data } = useSelector((state) => state.addData);
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
      dispatch(addForm(values));
      setDefaultdata(initData);
      //   const list = JSON.parse(localStorage.getItem("list") || []);
      //   const lists = [...list];

      //   lists.push(values);
      //   localStorage.setItem("list", JSON.stringify(lists));
    },
    enableReinitialize: true,
  });
  const setdata = (data) => {
    setDefaultdata(data);
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label>Full Name </label>
        <input
          type={"text"}
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />
        <label>Email</label>
        <input
          id="email"
          name="email"
          type={"text"}
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <label>Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.phone}
          required
        />
        <button type="submit">submit</button>
      </form>
      <CusTable setdata={setdata} />
    </>
  );
}
