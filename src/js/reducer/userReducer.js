import { GET_ALL_USERS, GET_ALL_USERS_FAIL, GET_ALL_USERS_SUCCESS, GET_USER_BY_ID, GET_USER_BY_ID_FAIL, GET_USER_BY_ID_SUCCES } from "../const";

const intitialState = {
    users:[],
    isLoading:false,
    errors:"",
    user:{}

}


const userReducer = (state=intitialState,{type,payload}) => {
    switch (type) {
        case GET_ALL_USERS:
            return {...state , isLoading:true}
        case GET_ALL_USERS_SUCCESS:
            return {...state,isLoading:false,users:payload} 

        case GET_ALL_USERS_FAIL :
            return {...state,isLoading:false,errors:payload}
        
            case GET_USER_BY_ID:
                return {...state , isLoading:true}
            case GET_USER_BY_ID_SUCCES:
                return {...state,isLoading:false,user:payload} 
    
            case GET_USER_BY_ID_FAIL :
                return {...state,isLoading:false,errors:payload}
    
        default:
            return state;
    }
}
 
export default userReducer;