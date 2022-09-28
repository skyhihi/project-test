import axios from "axios";

export const readAns = async (value) =>
  await axios.get(process.env.REACT_APP_API + "/read-ans", value);

export const submitAns = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/submit-ans", value);
