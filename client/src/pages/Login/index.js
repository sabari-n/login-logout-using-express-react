import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Grid,Link, Alert } from '@mui/material';
import loginImage from '../../images/login.svg'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export const Login = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const authUser = useSelector(x => x.auth.user);
    const authError = useSelector(x => x.auth.error);
    useEffect(() => {
        // redirect to home if already logged in
        if (authUser)  navigate("/", { replace: true });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(authActions.loginOrRegister({ email:values.email, password:values.password, param:"users/login"}))
            .then(
              user => {
                console.log('email', user)
             
                navigate("/", { replace: true });
              },
              error => {
                if (error) {
                  if(error.response){
                    if(Array.isArray(error.response.data)){
                    //   setStatus(error.response.data[0].message)
                    }
                    else{
                    //   setStatus(error.response.data)
                    }
                  }
                  else{
                    // setStatus("Invalid error response")
                  }
                }
              }
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
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                autoFocus
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
                value={formik.values.password}
                onChange={formik.handleChange}
                InputLabelProps={{ shrink: true }}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" onClick={formik.handleSubmit}>
                Login
            </Button>
            {authError &&
            <Alert severity="error">{authError.message}</Alert>
            }
            <Link
                sx={{marginTop:"15px"}}
                component="button"
                variant="body2"
                onClick={() => {
                    navigate("/register", { replace: true });

                }}
                underline="hover"
            >
                Register
            </Link>
        </Grid>
    );
};