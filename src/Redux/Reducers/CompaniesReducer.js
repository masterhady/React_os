
const INITIAL_VALUE = {
    list: [],
    test: "true"
}


export default function CompaniesReducer (state=INITIAL_VALUE, action){
    switch(action.type){
        case "GET_COMPANIES_LIST":
        return{
            ...state,
            list: action.payload
        }
        default: 
            return state
    }
}

