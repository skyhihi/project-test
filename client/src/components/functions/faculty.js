import axios from "axios";

export const listFaculty = async () =>
  await axios.get(process.env.REACT_APP_API + "/student-faculty");

export const createFaculty = async (authtoken, value) =>
  await axios.post(process.env.REACT_APP_API + "/create-faculty", value, {
    headers: {
      authtoken,
    },
  });

export const editFaculty = async (authtoken, value) =>
  await axios.put(process.env.REACT_APP_API + "/edit-faculty", value, {
    headers: {
      authtoken,
    },
  });

export const deleteFaculty = async (authtoken, id) =>
  await axios.delete(process.env.REACT_APP_API + "/del-faculty/" + id, {
    headers: {
      authtoken,
    },
  });
