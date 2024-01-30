import React, { useState } from 'react'
import OtpInput from 'react-otp-input';

//design
import {
    TextField,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel,
    Button,
    FormHelperText,

} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
const Signup = () => {

    //form status
    const [contect, setContect] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [otp, setOtp] = useState('');

    //phone validations

    let hasValNumber = /^[0-9]{1,11}$/.test(contect);


    //email validations
    let hasValEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);

    // password validations
    let hasSixChar = password.length >= 6;
    let hasLowerChar = /(.*[a-z].*)/.test(password);
    let hasUpparChar = /(.*[A-Z].*)/.test(password);
    let hasNumber = /(.*[0-9].*)/.test(password);
    let hasSpecailChar = /(.*[^a-zA-Z0-9].*)/.test(password);




    return (
        <div className='container mt-5 col-10 col-sm-8 col-md-6 col-lg-5'>
            <div className='text-center mb-5 alert alert-primary'>
                <label htmlFor="" className='h2'>Sign Up
                </label>
            </div>
            <div className='form-group'
            >
                <TextField size='small'
                    variant='outlined'
                    className='form-control'
                    label="phone"
                    value={contect}
                    onChange={(e) => setContect(e.target.value)}

                />
                <FormHelperText
                    className={`ml-1 mt-1  ${!hasValNumber && contect !== '' ? 'text-danger' : 'text-success'}`}>
                   {!hasValNumber && contect !== '' ? 'Enter a valid Contact number ' : ''}
                </FormHelperText>


            </div>

            <div className='form-group'
            >
                <TextField size='small'
                    variant='outlined'
                    className='form-control '
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />

                <FormHelperText
                    className={`ml-1 mt-1 email-validation-text ${!hasValEmail && email !== '' ? 'text-danger' : 'text-success'}`}>
                    {!hasValEmail && email !== '' ? 'Enter a valid email address' : ''}
                </FormHelperText>


            </div>

            <div className='form-group'>
                <FormControl variant='outlined'
                    size='small'
                    className='form-control'>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} endAdornment={
                            <InputAdornment>
                                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (<VisibilityIcon />) : (<VisibilityOffIcon />)}


                                </IconButton>
                            </InputAdornment>} />

                </FormControl>
                {password && (
                    <div className='ml-1' style={{ columns: 3 }}>
                        <div>
                            {hasSixChar ? (
                                <span className="text-success">
                                    <CheckCircleIcon 
                                    className='mr-1'
                                    fontSize='small'/>
                                  <small >at least 6 characters</small>
                                </span>
                            ) :(
                                <span className='text-danger'>
                                    <CancelIcon className='mr-1'
                                    fontSize='small'/>
                                    <small>at least 6 characters</small>

                                </span>
                            )}
                            
                        </div>
                        <div>
                            {hasLowerChar ? (
                                <span className="text-success">
                                    <CheckCircleIcon 
                                    className='mr-1'
                                    fontSize='small'/>
                                  <small >one lower case</small>
                                </span>
                            ) :(
                                <span className='text-danger'>
                                    <CancelIcon className='mr-1'
                                    fontSize='small'/>
                                    <small>one lower case</small>

                                </span>
                            )}
                            
                        </div>
                        <div>
                            {hasUpparChar ? (
                                <span className="text-success">
                                    <CheckCircleIcon 
                                    className='mr-1'
                                    fontSize='small'/>
                                  <small >one uppar case</small>
                                </span>
                            ) :(
                                <span className='text-danger'>
                                    <CancelIcon className='mr-1'
                                    fontSize='small'/>
                                    <small>one uppar case</small>

                                </span>
                            )}
                            
                        </div>
                        <div>
                            {hasNumber ? (
                                <span className="text-success">
                                    <CheckCircleIcon 
                                    className='mr-1'
                                    fontSize='small'/>
                                  <small >one number</small>
                                </span>
                            ) :(
                                <span className='text-danger'>
                                    <CancelIcon className='mr-1'
                                    fontSize='small'/>
                                    <small>one number</small>

                                </span>
                            )}
                            
                        </div>
                        <div>
                            {hasSpecailChar ? (
                                <span className="text-success">
                                    <CheckCircleIcon 
                                    className='mr-1'
                                    fontSize='small'/>
                                  <small >one special symbol</small>
                                </span>
                            ) :(
                                <span className='text-danger'>
                                    <CancelIcon className='mr-1'
                                    fontSize='small'/>
                                    <small>one special symbol</small>

                                </span>
                            )}
                            
                        </div>

                    </div>
                )}
            </div>


            <div className='form-group'
            >
                <TextField size='small'
                    variant='outlined'
                    type='password'
                    className='form-control'
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />

                {password && confirmPassword && (
                    <FormHelperText className='ml-1 mt-1'>
                        {password === confirmPassword ? (<span className='text-success'>Password does match</span>) : (<span className='text-danger'>Password does not match</span>)}


                    </FormHelperText>
                )}
            </div>
            <div className='form-group'>
                <OtpInput
                    variant='outlined'
                    className="form-control"
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-----</span>}
                    renderInput={(props) => <input {...props} />}
                />

            </div>



            <div className='text-center mt-4'>
                <Button variant='contained' disabled={!contect || !email || !password || !confirmPassword || !otp || password !== confirmPassword || !hasSixChar || !hasLowerChar || !hasUpparChar || !hasNumber || !hasSpecailChar || !hasValEmail}>Submit</Button>

            </div>


        </div>
    )
}

export default Signup;
