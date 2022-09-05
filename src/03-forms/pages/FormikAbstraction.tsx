import { useFormik, Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/MyTextInput';

import '../styles/styles.css';


const FormikAbstraction = () => {   
    
  
  return (
    <div>
        <h2> Formik Abstraction page</h2>

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

                    <MyTextInput label="Name" name="name" placeholder="Enter Name" />

                             
                    <MyTextInput label="Lastname" name="lastname" placeholder="Enter Lastname" />
            

                    <MyTextInput label="Email address" name="email" placeholder="Enter Email" /> 
            
                  
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

export default FormikAbstraction
