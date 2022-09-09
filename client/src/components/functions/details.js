import axios from "axios";

export const details_type = async () =>
  await axios.get(process.env.REACT_APP_API + "/details-type");

export const details_typeID = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/details-type-id", value);

export const details_ID = async (id) =>
  await axios.get(process.env.REACT_APP_API + "/details-type/" + id);

export const createDetail_type = async () =>
  await axios.post(process.env.REACT_APP_API + "/create-type");

export const delete_type = async () =>
  await axios.delete(process.env.REACT_APP_API + "/delete-type");

export const editTitle_type = async () =>
  await axios.put(process.env.REACT_APP_API + "/editTitle-type");

export const editDetail_type = async () =>
  await axios.put(process.env.REACT_APP_API + "/editDetail-type");
