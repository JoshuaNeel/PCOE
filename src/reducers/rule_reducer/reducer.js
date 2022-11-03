import { DUMMY,SECURITY_GROUP_FLAG,
  SECURITY_GROUP_DATA,TICKERS_GRID_DATA } from "../../actions/actiontypes";

const initialState = {
  securityData:{flagOption: 'security_summary_page',subHeadingTitle:''}
};

const rule_reducer = (state = initialState, action) => {
  switch (action.type) {
    case DUMMY:
      return {
        ...state,
        data:action.payload
      };
    case SECURITY_GROUP_FLAG:
      return {
        ...state,
        securityData:action.payload
      };
    case SECURITY_GROUP_DATA:
      return {
        ...state,
        securityGridData:action.payload
      };
    case TICKERS_GRID_DATA:
      return {
        ...state,
        tickersData:action.payload
      };
    default:
      return state;
  }
};
export default rule_reducer;