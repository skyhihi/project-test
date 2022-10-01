import axios from "axios";

export const listYears = async () =>
  await axios.get(process.env.REACT_APP_API + "/student-years");

export const createYear = async (authtoken, value) =>
  await axios.post(process.env.REACT_APP_API + "/create-year", value, {
    headers: {
      authtoken,
    },
  });

export const editYear = async (authtoken, value) =>
  await axios.put(process.env.REACT_APP_API + "/edit-year", value, {
    headers: {
      authtoken,
    },
  });

export const deleteYear = async (authtoken, id) =>
  await axios.delete(process.env.REACT_APP_API + "/del-year/" + id, {
    headers: {
      authtoken,
    },
  });
