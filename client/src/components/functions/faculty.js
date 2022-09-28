import axios from "axios";

export const listFaculty = async () =>
  await axios.get(process.env.REACT_APP_API + "/student-faculty");

export const createFaculty = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/create-faculty", value);

export const editFaculty = async (value) =>
  await axios.put(process.env.REACT_APP_API + "/edit-faculty", value);

export const deleteFaculty = async (id) =>
  await axios.delete(process.env.REACT_APP_API + "/del-faculty/" + id);
