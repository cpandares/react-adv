import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


import "../styles/styles.css";

export const RegisterFormikPage = () => {
  
  return (
    <div>
      <h2>Formik Register page</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener minimo 2 caracteres")
            .max(15, "15 caracteres maximo")
            .required("Required"),
          email: Yup.string()
            .email("Email no tiene formato  valido")
            .required(),
          password1: Yup.string().min(6,"El password debe ser de al menos 6 caracteres").required('Required'),
          password2: Yup.string().oneOf([Yup.ref("password1"), null],"Passwords no coinciden").required('Required'),
        })}
      >
        {(formik) => (
          <Form>

            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span"/>   

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span"/>   
        
            <label htmlFor="password1">Password</label>
            <Field name="password1" type="password" />
            <ErrorMessage name="password1" component="span"/>   

            <label htmlFor="password2">Password confirmation</label>
            <Field name="password2" type="password" />
            <ErrorMessage name="password2" component="span"/>
          
            <button type="submit">Register</button>

            <button type="button" onClick={ formik.handleReset }>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
