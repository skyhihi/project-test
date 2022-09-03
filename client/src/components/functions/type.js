import axios from "axios";

export const type = async () =>
    await axios.get(process.env.REACT_APP_API + "/type")
export const createDetail_type = async () =>
    await axios.get(process.env.REACT_APP_API + "/createDetail_type")
//export const edittype = 