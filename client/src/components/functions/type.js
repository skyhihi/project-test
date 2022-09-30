import axios from "axios";

export const type = async () =>
  await axios.get(process.env.REACT_APP_API + "/type");

export const create_type = async (authtoken, value) =>
  await axios.post(process.env.REACT_APP_API + "/create-type", value, {
    headers: {
      authtoken,
    },
  });

export const delete_type = async (authtoken, id) =>
  await axios.delete(process.env.REACT_APP_API + "/delete-type/" + id, {
    headers: {
      authtoken,
    },
  });

export const edit_typeName = async (authtoken, value) =>
  await axios.put(process.env.REACT_APP_API + "/edit-typeName", value, {
    headers: {
      authtoken,
    },
  });

export const edit_typeSym = async (authtoken, value) =>
  await axios.put(process.env.REACT_APP_API + "/edit-typeSym", value, {
    headers: {
      authtoken,
    },
  });
