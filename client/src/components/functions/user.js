import axios from "axios";

export const listUsers = async (authtoken) =>
  await axios.get(process.env.REACT_APP_API + "/users", {
    headers: {
      authtoken,
    },
  });

export const deleteUsers = async (authtoken, id) =>
  await axios.delete(process.env.REACT_APP_API + "/delete-user/" + id, {
    headers: {
      authtoken,
    },
  });

export const changeRole = async (authtoken, value) =>
  await axios.put(process.env.REACT_APP_API + "/change-role", value, {
    headers: {
      authtoken,
    },
  });
