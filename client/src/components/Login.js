import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';





const Login = ({touched, errors }) => {
  
  return (

    <Form className="form">

    <div className="form-group">
      <label className="label">User Name</label>
      <Field
        className="input"
        name="username"
        type="text"

      />
      <p>{touched.username && errors.username}</p>
    </div>

    <div className="form-group">
      <label className="label">Password</label>
      <Field
        className="input"
        name="password"
        type="password"
      />
      <p>{touched.password && errors.password}</p>
    </div>
    
    <button className="btn" type='submit' >Submit &rarr;</button>
  </Form>
  );
}


const FormikLogin =  withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },


  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6)
      .required(),
    password: Yup.string()
      .min(8)
      .required()
  }),

  handleSubmit(values, formikBag) {

    return(
      axios
        .post(`http://localhost:5000/api/register`, values)
        .then(res => {

          console.log(res.data);

          // localStorage.setItem("token", res.data.token);

          formikBag.props.setToken(res.data.token);

          formikBag.props.history.push("/secret-info");
          
        })
        .catch(err => {
          console.log("err in handle submit");
        })
    ) 
  }
})(Login);

export default FormikLogin