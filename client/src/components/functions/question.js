import axios from "axios";

export const listQuestions = async () =>
  await axios.get(process.env.REACT_APP_API + "/questions");

export const readQuestions = async (id) =>
  await axios.get(process.env.REACT_APP_API + "/read-question/" + id);

export const createQuestion = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/create-question", value);

export const removeQuestion = async (id) =>
  await axios.delete(process.env.REACT_APP_API + "/deleteQuestion/" + id);

export const changeQuestion = async (value) =>
  await axios.put(process.env.REACT_APP_API + "/change-question", value);

export const changeType = async (value) =>
  await axios.put(process.env.REACT_APP_API + "/change-question-type", value);
