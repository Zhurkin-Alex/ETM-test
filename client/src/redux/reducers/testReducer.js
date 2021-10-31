const actionState = {
  list:[],
  basket:[],
  filter:[]
}
const testReducer = (state = actionState, action) => {
  switch (action.type) {
    case "ADDPRICE":
      return {
        ...state,
        list:action.payload
      }
      

    case "ADDBASKET":
      return {...state,
        basket: [...state.basket, action.payload]};

    case "ADDFILTER":
      return {...state,
        filter: action.payload};




      default:
        return state;
  }
};

export default testReducer;
