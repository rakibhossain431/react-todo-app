import {useState, useEffect} from 'react'

 const Form = () => {
    const inisialage = {Username:"", email:"", password:""};

    const [formValuse, setFormValuse] = useState(inisialage)
    const [formError, setFormError] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange =(e) =>{
         const {name, values} =e.target
         setFormValuse({...formValuse, [name]:values}) 
         console.log(formValuse)
     }
     const heandleSubmit = (e) => {
         e.preventDefault();
         setFormError(validate(formValuse))
     }
     useEffect(() => {
         console.log(formError)
        if(Object.keys(formError).length === 0 && isSubmit)
        console.log(formValuse)
     } ,[formValuse])
     const validate = (values) => {
        const errors = {};
        const regex = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;
        if(!values.Username){
            errors.Username= "Username is required"
        }
        if(!values.email){
            errors.email= "email is required"
        }
        if(!values.password){
            errors.password= "password is required"
        }
        return;
     }

  return (
    <div className='container'>
        <pre>{JSON.stringify(formValuse , undefined , 2 )}</pre>
        <form onSubmit={heandleSubmit}>
            <h1>Login Form</h1>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='fild'>
                    <label>Username</label>
                    <input 
                       type="text" 
                       name = "username"
                       placeholder='Username'
                       values={ formValuse.Username}
                       onChange={handleChange}
                       />
                </div>
                <p>{ formError.Username}</p>
                <div className='fild'>
                    <label>Email</label>
                    <input 
                       type="text"
                       name="email"
                       placeholder='email'
                       values={ formValuse.email}
                       onChange={handleChange}
                       
                    ></input>
                </div>
                <p>{ formError.email}</p>
                <div className='fild'>
                    <label>password</label>
                    <input 
                       type="password"
                       name="password"
                       placeholder="password"
                       values={ formValuse.password}
                       onChange={handleChange}
                        ></input>
                </div>
                <p>{ formError.password}</p>
                <button className='fluid ui button blue'> Submite</button>
            </div>
        </form>

    </div>
  )
}
export default Form
