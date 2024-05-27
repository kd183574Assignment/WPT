import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


function Register()
{
    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const onRegister = async () => {
        if(firstName.length == 0)
            {
                toast.error("Please enter first name")
            }
        else if(lastName.length == 0)
            {
                toast.error("Please enter last name")
            }
        else if(email.length == 0)
            {
                toast.error("Please enter email ")

            }
        else if(password.length == 0)
            {
                toast.error("Please enter password")
            }
        else if(password != confirmPassword)
            {
                toast.error1("Password does not match")
            }
        else
        {
            const result = await Register(firstName, lastName, email, password)
            if(result['status'] == 'success'){
                toast.success("Successfully registered a new user")
                navigate('/login')
            }
            else{
                toast.error(result['error'])
            }
        }
    }

    return(
       <div>
        <h2 className="page-header">REGISTER</h2>
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <div className="form">
                    <div className="mb-3">
                        <label htmlFor="">FIRST NAME</label>
                        <input 
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        className='form-control' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">LASTNAME</label>
                        <input 
                        onChange={(e) => setLastName(e.target.value)}
                        type="text" 
                        className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">EMAIL</label>
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">PASSWORD</label>
                        <input 
                        onChange={(e) => setPassword(e.target.value)}

                        type="password" 
                        className="form-control"/>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="">CONFRIM PASSWORD</label>
                        <input 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password" 
                        className="form-control"/>
                    </div>

                    <div>
                        Already have an acoount? <Link to='/login'>login here</Link>
                    </div>
                    <button onClick={onRegister} className="btn btn-success mt-2">REGISTER</button>
                </div>
            </div>
            <div className="col"></div>
        </div>
       </div>
    )
}
export default Register