import { useFormik  } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';


export const FormikYupPage = () => {   
    
    const { handleSubmit,
            errors, 
            touched,
            getFieldProps } = useFormik({
        initialValues:{
            name:'',
            lastname:'',
            email:''
        },
        onSubmit:(values)=>{
            console.log(values)
        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, '15 caracteres maximo').required('Required'),
            lastname: Yup.string().max(10, '10 caracteres maximo').required('Required'),
            email: Yup.string().email('Email no tiene formato  valido').required()
        })
    })
  return (
    <div>
        <h2>Formik Yup page</h2>

       <form 
        noValidate
        onSubmit={ handleSubmit }
        >

        <label htmlFor="name">Name</label>
        <input 
            type="text"     
            { ...getFieldProps(('name')) }
            />

        { touched.name && errors.name && <span>{ errors.name }</span> }

        <label htmlFor="lastname">Lastname</label>
        <input 
            type="text" 
            { ...getFieldProps(('lastname')) }
            />
       { touched.lastname && errors.lastname && <span>{ errors.lastname } </span> }

        <label htmlFor="email">Email</label>
        <input 
            type="text" 
            { ...getFieldProps(('email')) }
             />
        
       { touched.email && errors.email && <span>{ errors.email }</span> }

        <button type="submit">
            Submit
        </button>
       </form>
    </div>
  )
}

export default FormikYupPage
