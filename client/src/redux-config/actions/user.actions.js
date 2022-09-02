import { userConstants } from "../constants";
import { authenticationService } from "../services";
export const userActions = {
  login,
  logout,
  register
};

function login(email, password) {


  return (dispatch) => {
    dispatch(request({ email }));
    const loginData = authenticationService.login(email, password);
    loginData.then(
      (user) => {
        dispatch(success(user));
  

        // history.push('/');
      },
      (error) => {
        dispatch(failure(error.toString()));
        // dispatch(alertActions.error(error.toString()));
      }
    );
    return loginData;
  };

  function request(user) {
    return {
      type: userConstants.LOGIN_REQUEST,
      user,
    };
  }
  function success(user) {
    return {
      type: userConstants.LOGIN_SUCCESS,
      user,
    };
  }
  function failure(error) {
    return {
      type: userConstants.LOGIN_FAILURE,
      error,
    };
  }
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    authenticationService.register(user).then(
      (user) => {
        dispatch(success());
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function logout() {
  // history.push('/login');
  // window.location.reload();
  authenticationService.logout();
  return { type: userConstants.LOGOUT };
  // return { type: userConstants.LOGOUT};
}
