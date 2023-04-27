import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  const axios1 = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  dispatch(loginStart());
  try {
    const res = await axios1.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
