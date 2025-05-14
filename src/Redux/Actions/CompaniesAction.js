import { type } from "@testing-library/user-event/dist/type"
// import axios from "axios"
import { axiosInstance } from "../../Network/axiosInstance"

export const getCompaniesList = (data) => (dispatch) => {

    return axiosInstance.get("data")
    .then((res) => 
        dispatch({
            type: "GET_COMPANIES_LIST",
            payload: res.data
        })
    )
    .catch((err) => console.log(err))
}
