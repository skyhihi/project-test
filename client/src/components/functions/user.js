import axios from "axios";

export const listUsers = async (value) =>
  await axios.get(process.env.REACT_APP_API + "/users", value);

export const deleteUsers = async (authtoken, id) =>
  await axios.delete(process.env.REACT_APP_API + "/delete-user/" + id, {
    headers: {
      authtoken,
    },
  });
