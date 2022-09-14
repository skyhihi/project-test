import axios from "axios";

export const listUniversity = async () =>
  await axios.get(process.env.REACT_APP_API + "/student-uni");

export const createUniversity = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/create-uni", value);

export const editUniversity = async (value) =>
  await axios.put(process.env.REACT_APP_API + "/edit-uni", value);

export const deleteUniversity = async (id) =>
  await axios.delete(process.env.REACT_APP_API + "/del-uni/" + id);
