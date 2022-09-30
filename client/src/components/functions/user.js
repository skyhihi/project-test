import axios from "axios";

export const listUsers = async (value) =>
  await axios.get(process.env.REACT_APP_API + "/list-user", value);
