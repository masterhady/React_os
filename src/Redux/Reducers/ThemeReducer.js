const INITAL_VALUE = {
    theme: "light",
}


export default function themeReducer (state = INITAL_VALUE, action){
    switch(action.type){
        case "CHANGE_THEME":
            return {
                ...state,
                theme: action.payload,
            }
        default: 
            return state;
    }
}
