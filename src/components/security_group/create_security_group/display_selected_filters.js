/*
This file contains the code
related to the
displaying the seected filter list itmes
*/
import { Filters_Selected } from "../../../utils/createGroup_utils";
import { useSelector } from "react-redux";
const labelValueStyles = {
    color: 'black'
}
export default function DisplaySelectedFiltersComponent(props) {
  const securityGroupData = useSelector((state) => state.security_reducers);
  const localState = securityGroupData?.filtersData?.filtersSelectedData;
  return (
    <div className="filters_card_wrapper">
      <h2>Filters Selected</h2>
      <div className="filters_card_container">
        <div className="row">
          {Filters_Selected.map((item) => {
            return (
              <div className="col-4">
                {item.labelName}:
                <label style={labelValueStyles}>
                  {" "}
                  {Array.isArray(localState[item.keyName])
                    ? localState[item.keyName].join(",")
                    : localState[item.keyName]}{" "}
                </label>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
}

// const DisplaySelectedFiltersComponent = DisplaySelectedFilters;
// export default DisplaySelectedFiltersComponent;
