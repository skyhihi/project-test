import axios from "axios";

export const readAnsRS = async (value) =>
  await axios.get(process.env.REACT_APP_API + "/read-ansRs", value);

export const submitAnsRs = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/submit-ansRs", value);
