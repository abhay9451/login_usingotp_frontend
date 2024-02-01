import React, { useState } from 'react'
import { toast } from "react-toastify";
import { generateotp} from '../api/user';
import { useNavigate } from 'react-router-dom';
//design
import {
    TextField,
    Button,
    FormHelperText,
} from '@mui/material';
const Home = () => {

    //form status 
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    


     //email validations
     let hasValEmail = /^[a.-zA.-Z0.-9]+@[a.-zA.-Z0.-9]+\.[A-Za-z]+$/.test(email);

    const handlegenerateotp = async (e) => {
        e.preventDefault();

        try {
            const res = await generateotp({  email });
            if (res.error) {
                console.error(res.error);
                toast.error(res.error);
            } else {
                toast.success(res.message);
                navigate.replace('/signup');
            }
        } catch (err) {
            console.error(err);
            toast.error('An error occurred during send otp.');
        }
    };

    return (
        <div className='container mt-5 col-10 col-sm-8 col-md-6 col-lg-5'>
            <div className='text-center mb-5 alert alert-primary'>
                <label htmlFor="" className='h2'>Send OTP
                </label>
            </div>
            <div className='form-group'>
                <TextField size='small'
                    variant='outlined'
                    className='form-control'
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText
                    className={`ml-1 mt-1 email-validation-text ${!hasValEmail && email !== '' ? 'text-danger' : 'text-success'}`}>
                    {!hasValEmail && email !== '' ? 'Enter a valid email address' : ''}
                </FormHelperText>

            </div>

            <div className='text-center mt-4'>
                <Button variant='contained' disabled={!email }
                onClick={handlegenerateotp}
                >Send</Button>

            </div>
        </div>
    )

}
export default Home
