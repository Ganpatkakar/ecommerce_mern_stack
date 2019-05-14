const commonInitState = {
    initialState : "Redux ready",
    user_name : "User"
};
const commonReducer = (state = commonInitState, action) => {
    switch(action.type) {
        case "user_logged_in":
            state = {
                ...state,
                user_isLogedin : action.payload
            };
            break;
        case "user_isAdmin":
            state = {
                ...state,
                user_isadmin : action.payload
            };
            break;
        case "user_name_update":
            state = {
                ...state,
                user_name : action.payload
            };
            break;
        default :
            console.log("Reducer didnot found a proper match case");
    }
    return state;
};

export default commonReducer;