import { DUMMY,SECURITY_GROUP_FLAG,
  SECURITY_GROUP_DATA,TICKERS_GRID_DATA } from "../../actions/actiontypes";

const initialState = {};

const rule_reducer = (state = initialState, action) => {
  switch (action.type) {
    case DUMMY:
      return {
        ...state,
        data:action.payload
      };
    default:
      return state;
  }
};
export default rule_reducer;