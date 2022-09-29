import axios from "axios";

export const readAll = async (value) =>
  await axios.get(process.env.REACT_APP_API + "/read-all", value);

export const submitAll = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/submit-all", value);
