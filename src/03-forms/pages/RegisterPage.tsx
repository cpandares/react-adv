import {  FormEvent } from 'react'
import useForm from '../hooks/useForm'
import '../styles/styles.css'

const RegisterPage = () => {

    const { formData, onChange, name, email, password1,password2,reset, isValidEmail } = useForm({
        name:'',
        email:'',
        password1:'',
        password2:''
    })
    
    const onSubmit = (e:FormEvent<HTMLFormElement>)=>{

        e.preventDefault()

        console.log(formData)
        
    }
  return (
    <div>
        <h2>Register page</h2>
        <form 
        onSubmit = { onSubmit }
        noValidate>
            <input 
                type="text"
                placeholder="Name"
                name="name"
                value={ name }
                onChange = { onChange }
                className = { `${ name.trim().length <= 0 && 'has-error' }` }
            />
            { name.trim().length <= 0 && <span>El nombre es requerido</span> }
            <input 
                type="email"
                placeholder="Email"
                name="email"
                value={ email }
                onChange = { onChange }
                className= { `${ !isValidEmail(email) && 'has-error' }` }
            />
            { !isValidEmail(email) && <span>El email no es valido</span> }
            <input 
                type="password"
                placeholder="Password"
                name="password1"
                value={ password1 }
                onChange = { onChange }
            />
            { password1.trim().length<=0 && <span>El password es requerido</span> }
            { password1.trim().length < 6 && password1.trim().length >0 && <span>Password deb ser de al menos 6 caracteres</span> }
             <input 
                type="password"
                placeholder="Repeat password"
                name="password2"
                value={ password2 }
                onChange = { onChange }

            />
             { password2.trim().length<=0 && <span>El password es requerido</span> }
             { password2 !== password1 && <span>Las constraseñas no coinciden</span> }
            <button type="submit">
                Register
            </button>

            <button type='button' onClick={ reset }>
                Reset
            </button>
        </form>
    </div>
  )
}

export default RegisterPage
