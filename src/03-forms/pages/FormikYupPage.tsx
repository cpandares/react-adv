import { useFormik  } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

interface FormValues {
    name: string;
    lastname: string;
    email: string;
}

const FormikYupPage = () => {   
    
    const { handleChange, values, handleSubmit,errors, touched, handleBlur } = useFormik({
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
            name="name" 
            onChange={ handleChange }
            value={ values.name }
            onBlur = { handleBlur }
            />
        { touched.name && errors.name && <span>{ errors.name }</span> }

        <label htmlFor="lastname">Lastname</label>
        <input 
            type="text" 
            name="lastname" 
            onChange={ handleChange }
            value={ values.lastname }
            onBlur = { handleBlur }
            />
       { touched.lastname && errors.lastname && <span>{ errors.lastname } </span> }

        <label htmlFor="email">Email</label>
        <input 
            type="text" 
            name="email"
            onChange={ handleChange }
            value={ values.email }
            onBlur = { handleBlur }
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
