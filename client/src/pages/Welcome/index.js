import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store';


export const Home = () => {
    const authUser = useSelector(x => x.auth.user);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout());
    return (


        <Grid
            style={{  minHeight: '100vh'}}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
        >
            <Typography padding={"15px"}>
                Welcome to Home Page
            </Typography>
            <Typography color={"turqoise"} padding={"15px"}>
              {authUser.username}
            </Typography>

            <Button color="primary" variant="contained" onClick={logout}>
                Logout
            </Button>

          
        </Grid>
    );
};
