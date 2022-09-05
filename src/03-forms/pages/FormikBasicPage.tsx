import { useFormik,FormikErrors } from 'formik';

import '../styles/styles.css';

interface FormValues {
    name: string;
    lastname: string;
    email: string;
}

const FormikBasicPage = () => {

    const validate = ( values: FormValues )=>{
         
        const errors: FormikErrors<FormValues> = {}

        if( !values.name ){
            errors.name = 'Required'
        }else if(values.name.length >=15){
            errors.name = 'Must be 15 characters or less'
        }

        
        if( !values.lastname ){
            errors.lastname = 'Required'
        }else if( values.lastname.length >=10 ){
            errors.lastname = 'Must be 15 characters or less'
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }
    
    const { handleChange, values, handleSubmit,errors, touched, handleBlur } = useFormik({
        initialValues:{
            name:'',
            lastname:'',
            email:''
        },
        onSubmit:(values)=>{
            console.log(values)
        },
        validate
    })
  return (
    <div>
        <h2>Formik Basic page</h2>

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

export default FormikBasicPage
