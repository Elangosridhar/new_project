import axios  from "axios";
import apiurl from "../Apiendpoint/apiendpoint";

export const apiregister = async () =>{
    const res = await axios.get(`${apiurl()}/users`)
    return res.data
}