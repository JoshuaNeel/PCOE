import { SECURITY_GROUP_FLAG,
    SECURITY_GROUP_DATA,TICKERS_GRID_DATA,
    FILTERS_SELECTED_DATA } from "../actions/actiontypes";
  
  const initialState = {
    securityData:{flagOption: 'security_summary_page',subHeadingTitle:'',
  },
  filtersData:{filtersSelectedData:{
    groupname:'',
    lob:'',
    l1l2:[],
    countryoforigin:[],
    prdctExclude:[],
    prdctInclude:[],
    securityInclude:[],
    securityExclude:[],
    optionInclusion:'',
    marginability:'',
    pme:[]}}
  };
  
  const security_reducer = (state = initialState, action) => {
    switch (action.type) {
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
      case FILTERS_SELECTED_DATA:
        return {
          ...state,
          filtersData:action.payload
        };
      default:
        return state;
    }
  };
  export default security_reducer;