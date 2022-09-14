import axios from "axios";

export const listYears = async () =>
  await axios.get(process.env.REACT_APP_API + "/student-years");

export const createYear = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/create-year", value);

export const editYear = async (value) =>
  await axios.put(process.env.REACT_APP_API + "/edit-year", value);

export const deleteYear = async (id) =>
  await axios.delete(process.env.REACT_APP_API + "/del-yaer/" + id);
