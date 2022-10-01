import axios from "axios";

export const listUniversity = async () =>
  await axios.get(process.env.REACT_APP_API + "/student-uni");

export const createUniversity = async (authtoken, value) =>
  await axios.post(process.env.REACT_APP_API + "/create-uni", value, {
    headers: {
      authtoken,
    },
  });

export const editUniversity = async (authtoken, value) =>
  await axios.put(process.env.REACT_APP_API + "/edit-uni", value, {
    headers: {
      authtoken,
    },
  });

export const deleteUniversity = async (authtoken, id) =>
  await axios.delete(process.env.REACT_APP_API + "/del-uni/" + id, {
    headers: {
      authtoken,
    },
  });
