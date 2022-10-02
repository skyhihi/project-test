import axios from "axios";

export const login = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/login", value);

export const register = async (authtoken, value) =>
  await axios.post(process.env.REACT_APP_API + "/register", value, {
    headers: {
      authtoken,
    },
  });

export const currentUser = async (authtoken) =>
  await axios.post(
    process.env.REACT_APP_API + "/current-user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
