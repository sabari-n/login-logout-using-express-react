import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { configData } from '../config/config.helper';

// create slice

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation


function createInitialState() {
    return {
        // initialize state from local storage to enable user to stay logged in
        user: localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null,
        error: null
    }
}


function createReducers() {
    return {
        logout
    };

    function logout(state) {
        state.user = null;
        localStorage.removeItem('user');
    }
}

function createExtraActions() {
    return {
        loginOrRegister: loginOrRegister(),
    };    

    function loginOrRegister(param) {
        return createAsyncThunk(
            `${name}/login-register`,
        
            async (data) => {
                let param = data.param
                delete data.param
                return await axios.post(configData.API_URL + param, data)
            }
        );
    }
}

function createExtraReducers() {
    return {
        ...loginOrRegister(),
    };
    function loginOrRegister() {
        var { pending, fulfilled, rejected } = extraActions.loginOrRegister;
        return {
            [pending]: (state) => {
                state.error = null;
            },
            [fulfilled]: (state, action) => {
                const user = action.payload.data;
                console.log('user',user)
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                state.user = user;

                // get return url from location state or default to home page
                // const { from } = history.location.state || { from: { pathname: '/' } };
                // history.navigate(from);
            },
            [rejected]: (state, action) => {
                state.error = action.error;
            }
        }    
    }


}
