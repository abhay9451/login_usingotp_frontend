import React, { useState } from 'react'

//design
import {
    TextField,
    Button,
} from '@mui/material';
const Home = () => {

    //form status

    const [email, setEmail] = useState("");
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

            </div>

            <div className='text-center mt-4'>
                <Button variant='contained' disabled={!email }>Send</Button>

            </div>
        </div>
    )

}
export default Home
