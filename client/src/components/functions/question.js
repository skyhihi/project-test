import axios from "axios";

export const listQuestions = async () =>
  await axios.get(process.env.REACT_APP_API + "/questions");

export const readQuestions = async (id) =>
  await axios.get(process.env.REACT_APP_API + "/read-question/" + id);

export const createQuestion = async (authtoken, value) =>
  await axios.post(process.env.REACT_APP_API + "/create-question", value, {
    headers: {
      authtoken,
    },
  });

export const removeQuestion = async (authtoken, id) =>
  await axios.delete(process.env.REACT_APP_API + "/deleteQuestion/" + id, {
    headers: {
      authtoken,
    },
  });

export const changeQuestion = async (authtoken, value) =>
  await axios.put(process.env.REACT_APP_API + "/change-question", value, {
    headers: {
      authtoken,
    },
  });

export const changeType = async (authtoken, value) =>
  await axios.put(process.env.REACT_APP_API + "/change-question-type", value, {
    headers: {
      authtoken,
    },
  });
