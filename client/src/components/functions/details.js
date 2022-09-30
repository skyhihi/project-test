import axios from "axios";

export const details_type = async () =>
  await axios.get(process.env.REACT_APP_API + "/details-type");

export const details_typeID = async (authtoken, value) =>
  await axios.post(process.env.REACT_APP_API + "/details-type-id", value, {
    headers: {
      authtoken,
    },
  });

export const details_ID = async (id) =>
  await axios.get(process.env.REACT_APP_API + "/details-type/" + id);

export const createDetail_type = async (authtoken, value) =>
  await axios.post(process.env.REACT_APP_API + "/createDetails-type", value, {
    headers: {
      authtoken,
    },
  });

export const deleteDetail_type = async (authtoken, id) =>
  await axios.delete(process.env.REACT_APP_API + "/deleteDetail-type" + id, {
    headers: {
      authtoken,
    },
  });

export const editTitle_type = async (authtoken, value) =>
  await axios.put(process.env.REACT_APP_API + "/editTitle-type", value, {
    headers: {
      authtoken,
    },
  });

export const editDetail_type = async (authtoken, value) =>
  await axios.put(process.env.REACT_APP_API + "/editDetail-type", value, {
    headers: {
      authtoken,
    },
  });
