import { DUMMY,SECURITY_GROUP_FLAG,
  SECURITY_GROUP_DATA } from "../../actions/rule_actions/actiontypes";

const initialState = {
  securityData:{flagOption: false}
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
    default:
      return state;
  }
};
export default rule_reducer;