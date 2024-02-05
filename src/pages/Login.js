import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
//design
import {
    TextField,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel,
    Button,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// function
import { login } from '../api/user';
import { TextFields } from '@mui/icons-material';

const Login = () => {
    const navigate = useNavigate();

    //form status
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await login({ email, password });
            if (res.error) {
                console.error(res.error);
                toast.error(res.error);
            }
            else {
                toast.success(res.message);
                navigate("/", { replace: true });
            }

        } catch (err) {
            toast.error(err);
        }
    };
    return (
        <div className='container mt-5  pt-1 is-max-desktop'>
            <div className='text-center mb-5 alert alert-primary'>
                <label htmlFor="" className='h2'>Login
                </label>
            </div>
            <div div className="form-group ">
                <div className="control has-icons-right is-expanded">
                    <TextField
                        className="form-control has-icons-left has-icons-right"
                        size="small"
                        type="email"
                        variant="outlined"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                    />
                    <span className="icon is-small is-right">
                        <i className="fas fa-envelope fa-lg"></i>
                    </span>
                </div>
            </div>
            <div className='form-group'>
            {/* <p className="control has-icons-left is-expanded">
            <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span> */}
                <FormControl variant='outlined'
                    size='small'
                    className='form-control'>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (<VisibilityIcon />) : (<VisibilityOffIcon />)}


                                </IconButton>
                            </InputAdornment>} />

                </FormControl>
                
                {/* </p> */}
            </div>
            <div className='text-center mt-4'>
                <Button variant='contained' disabled={!email || !password}
                    onClick={handleLogin}>Submit</Button>

            </div>

        </div>
    )
}

export default Login
