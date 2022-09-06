
import { Form, Formik } from 'formik';
import { MySelectInput, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup'

const initialValues: { [ key:string ] : any} = { };
const requiredFieds: { [ key:string ] : any} = { };

for (const input of formJson) {

    initialValues[ input.name ] = input.value

    if( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if( rule.type === 'required' ){
            schema = schema.required('Este campo es requerido')
        }

        if( rule.type === 'minLength'){
            schema = schema.min( (rule as any ).value || 2, `Este campo debe tener minimo ${ (rule as any ).value } caracteres` )
        }

        if ( rule.type === 'email' ) {
            schema = schema.email( `Revise el formato del email`);
        }
    }

    requiredFieds[input.name] = schema
 }

 const validationsSchema = Yup.object({ ...requiredFieds })

export const DynamicFormPage = () => {
  return (
    <div>
       <h2>Dinamic form</h2>

        <Formik
            initialValues={ initialValues }
            validationSchema={ validationsSchema }
            onSubmit = { (values)=>{
                console.log(values)
            } }
        >
            {
                (formik)=>(
                    <Form noValidate>
                        { 
                            formJson.map(({ type,name,placeholder,label, options }) =>{

                            if( type === 'select' ){
                            
                                return (
                                    <MySelectInput 
                                        key={ name }
                                        label={ label } 
                                        name={ name }
                                        >
                                        <option value="">Select an option</option>
                                        {
                                            options?.map( opt =>(
                                                <option 
                                                    key={ opt.id }
                                                    value={ opt.id }>
                                                    { opt.description }
                                                </option>
                                            ) )
                                        }
                                    </MySelectInput>
                                )
                            }
                           
                           else if( type = 'input' || type === 'email' || type ==='password' ){
                                
                                return <MyTextInput 
                                        key={ name }
                                        type={( type as any )}
                                        label={ label } 
                                        name={name}   
                                        placeholder = { placeholder }                                 
                                     />
                                }

                            }) 
                        
                        }

                        <button type='submit'>
                            Submit
                        </button>
                    </Form>
                )
            }

        </Formik>

    </div>
  )
}


