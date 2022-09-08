import axios from "axios";

export const type = async () =>
    await axios.get(process.env.REACT_APP_API + "/type")
export const create_type = async () =>
    await axios.get(process.env.REACT_APP_API + "/create-type")
export const delete_type = async (id) =>
    await axios.delete(process.env.REACT_APP_API + "/delete-type/"+id)
export const edit_typeName = async (value) =>
    await axios.put(process.env.REACT_APP_API + "/edit-typeName", value)
export const edit_typeSym = async (value) =>
    await axios.put(process.env.REACT_APP_API + "/edit-typeSym", value)