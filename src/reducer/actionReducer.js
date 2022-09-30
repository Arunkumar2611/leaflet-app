import { VOLCANODATA, VOLCANOERROR, VOLCANOLOADING } from "../constant/constant";
  
  const initialState = {
    loading: false,
    data: [],
    error: null
  };
  
const volcano = (state = initialState, action) => {
    switch (action.type) {
      case VOLCANOLOADING:
        return { ...state, loading: true };
      case VOLCANODATA:
        return {
          ...state,
          data: action.todos,
          loading: false
        };
      case VOLCANOERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export default volcano