import axios from "axios";

export const details_type = async () =>
  await axios.get(process.env.REACT_APP_API + "/details-type");

export const details_typeID = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/details-type-id", value);

export const details_ID = async (id) =>
  await axios.get(process.env.REACT_APP_API + "/details-type/" + id);

export const createDetail_type = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/createDetails-type", value);

export const deleteDetail_type = async (id) =>
  await axios.delete(process.env.REACT_APP_API + "/deleteDetail-type" + id);

export const editTitle_type = async (value) =>
  await axios.put(process.env.REACT_APP_API + "/editTitle-type", value);

export const editDetail_type = async (value) =>
  await axios.put(process.env.REACT_APP_API + "/editDetail-type", value);
