import {  Formik, Form  } from 'formik';
import { MyCheckboxInput, MySelectInput, MyTextInput } from '../components';

import * as Yup from 'yup';

import '../styles/styles.css';


export const FormikAbstraction = () => {       
  
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
            
                  
                  
                    <MySelectInput name="jobType" label="jobType">
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-jr">it-jr</option>
                    </MySelectInput>
                     

                    <MyCheckboxInput label="Terms & conditions" name="terms" />

                   
            
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
