import axios from "axios";
import toast from "react-hot-toast";
import { deleteSessionToken } from "../../components/delCookie";
import rutaBack from "./rutaBack"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const IS_AUTH = "IS_AUTH";
export const ISNT_AUTH = "ISNT_AUTH";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const UPDATE_USER = "UPDATE_USER";
export const LOGIN_WITH_GOOGLE = "LOGIN_WITH_GOOGLE";
export const LOGIN_WITH_FACEBOOK = "LOGIN_WITH_FACEBOOK";

// LOGIN
export const login = (formData) => async (dispatch) => {``
    const endpoint = `${rutaBack}/login/`;
    try {
      const response = await axios.post(endpoint, formData, {
        withCredentials: true,
      });
      toast.loading("Waiting...");
      if (response.data.correctLogin) {
        toast.success("Login successful!");
  
        dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error al ingresar");
      localStorage.setItem("isAuth", "false");
    }
  };
  
  // LOGIN WITH GOOGLE
  export const loginWithGoogle = (userInfo) => ({
    type: LOGIN_WITH_GOOGLE,
    payload: userInfo,
  });
  
  export const loginWithFacebook = (userInfo) => ({
    type: LOGIN_WITH_FACEBOOK,
    payload: userInfo,
  });
  
  export const logout = () => async (dispatch) => {
    try {
      dispatch({ type: LOGOUT, payload: false });
      toast.loading("Waiting...");
      deleteSessionToken();
      localStorage.setItem("authToken", "false");
  
      document.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  
  export const register = (formData) => async (dispatch) => {
    const endpoint = `${rutaBack}/user/`;
  
    try {
      const response = await axios.post(`${endpoint}`, formData);
  
      toast.loading("Waiting...");
      if (response.status === 200) {
        toast.success("Register successful!");
  
        dispatch({ type: REGISTER_SUCCESS });
        setTimeout(() => {
          location.href = "/confirmation";
        }, 2000);
      } else {
        toast.error("Error while registering");
      }
    } catch (error) {
      toast.error("Error while registering");
  
      console.log(error);
    }
  };
  
  export const getUserById = (id) => {
    const endpoint = `${rutaBack}/user/`;
    return async (dispatch) => {
      try {
        let response = await axios.get(`${endpoint}/${id}`);
        dispatch({
          type: GET_USER_BY_ID,
          payload: response.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };
  
  export const isAuthenticated = (jwtToken) => async (dispatch) => {
    const endpoint = `${rutaBack}/login/auth`;
    try {
      if (jwtToken) {
        const response = await axios.post(endpoint, {
          token: jwtToken,
          provider: "jwt",
        });
        if (response.data) {
          dispatch({ type: IS_AUTH, payload: response.data });
        } else {
          dispatch({ type: ISNT_AUTH });
        }
      } else {
        const googletoken = localStorage.getItem("authToken");
        const response = await axios.post(endpoint, {
          token: googletoken,
          provider: "google",
        });
        if (response.data) {
          dispatch({ type: IS_AUTH, payload: response.data });
        } else {
          dispatch({ type: ISNT_AUTH });
        }
      }
    } catch (error) {
      dispatch({ type: ISNT_AUTH });
    }
  };

  export const updateUserAddress = (formUpdate) => async (dispatch) => {
    const endpoint = `${rutaBack}/user/update`;
  
    try {
      const response = await axios.put(endpoint, formUpdate);
  
      if (response.status === 200) {
        toast.success("Update successful!");
        dispatch({
          type: UPDATE_USER,
          payload: response.data,
        });
        setTimeout(() => {
          location.href = "/payPreview";
        }, 5000);
      }
    } catch (error) {
      toast.error("Error while updating");
      console.log(error);
    }
  };