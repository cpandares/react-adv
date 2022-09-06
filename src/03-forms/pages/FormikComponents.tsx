import {  Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';


export const FormikComponents = () => {   
    
  
  return (
    <div>
        <h2>Formik Components page</h2>

        <Formik
            initialValues={{
                name:'',
                lastname:'',
                email:'',
                terms: false,
                jobType: ''
            }}
            onSubmit= { (values) =>{
                console.log(values)
            } }
            validationSchema = {
                Yup.object({
                    name: Yup.string().max(15, '15 caracteres maximo').required('Required'),
                    lastname: Yup.string().max(10, '10 caracteres maximo').required('Required'),
                    email: Yup.string().email('Email no tiene formato  valido').required(),
                    terms: Yup.boolean().oneOf([true], 'Debe aceptar los terminos'),
                    jobType: Yup.string().notOneOf(['it-jr', 'Esta opcion no es valida']).required('Requerido')
                })
            }
        >

            {
                (formik) =>(
                    <Form >

                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="span"/>            
                    
            
                    <label htmlFor="lastname">Lastname</label>
                    <Field name="lastname" type="text" />
                    <ErrorMessage name="lastname" component="span"/>  
            
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="span"/>  

                    <label htmlFor="jobType">Email</label>
                    <Field name="jobType" as="select">
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-jr">it-jr</option>
                    </Field>
                    <ErrorMessage name="jobType" component="span"/>  


                    <label>
                        Terms
                        <Field name="terms" type="checkbox" />
                    </label>
                    <ErrorMessage name="terms" component="span"/>  
            
                    <button type="submit">
                        Submit
                    </button>
                   </Form>
                )
            }
        </Formik>

    </div>
  )
}

export default FormikComponents
