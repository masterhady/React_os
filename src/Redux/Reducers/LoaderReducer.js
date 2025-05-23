const INITIAL_VALUE = {
    isLoading: true
}

export default function loaderReducer (state = INITIAL_VALUE, action){
    switch(action.type){
        case "SET_LOADER":
            return{
                ...state,
                isLoading: action.payload
            }
        default: 
            return state;
    }
}