import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Grid,Link, Alert } from '@mui/material';
import loginImage from '../../images/login.svg'
import { useNavigate } from "react-router-dom";
import { authActions } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const validationSchema = yup.object({
    username: yup
    .string('Enter your full name')
    .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export const Register = () => {
    const navigate = useNavigate();
    const dispatch =useDispatch()
    const regError = useSelector(x => x.auth.error);
    const formik = useFormik({
        initialValues: {
            username:'',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (e,values) => {
            e.preventDefault(); 
            dispatch(authActions.loginOrRegister({ username:values.username,email:values.email, password:values.password,param:"users" }))
            .then(
              user => {
                console.log('email', user)
             
                navigate("/", { replace: true });
              },
            );
        },
    });

    return (


        <Grid
            style={{ backgroundImage: `url("${loginImage}")`, backgroundRepeat: "no-repeat", minHeight: '100vh', backgroundSize: "cover" }}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
        >
            <TextField
                size="small"
                id="username"
                name="username"
                label="Full name"
                variant="outlined"
                autoFocus
                required
                value={formik.values.username}
                onChange={formik.handleChange}
                InputLabelProps={{ shrink: true }}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
                size="small"
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                InputLabelProps={{ shrink: true }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />


            <TextField
                size="small"
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                InputLabelProps={{ shrink: true }}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" onClick={formik.handleSubmit}>
                Register
            </Button>
            {regError &&
            <Alert severity="error">{regError.message}</Alert>
            }
            <Link
                sx={{marginTop:"15px"}}
                component="button"
                variant="body2"
                onClick={() => {
                    navigate("/", { replace: true });

                }}
                underline="hover"
            >
                Login
            </Link>
        </Grid>
    );
};
