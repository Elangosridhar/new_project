import axios  from "axios";
import apiurl from "../Apiendpoint/apiendpoint";

export const apiregister = async (datas) =>{
    const res = await axios.post(`${apiurl()}/auth/apiregister`,datas)
    return res.data
}