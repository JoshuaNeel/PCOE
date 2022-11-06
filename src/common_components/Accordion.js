
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Accordion, Card } from "react-bootstrap";
import {MultiSelectBox} from './multi_select_checkbox';
import {RadioButton} from './radio_button';
import {l1_l2, countryOfOrigin, PMEGroup, productGroupToInclude, productGroupToExclude,
  securitiesToInclude,
  securitiesToExclude,
  optionInclusion, marginability} from './filters_data';
import TickerSearch from './TickerSearch';
import {create_group_filter_selection}
 from '../actions/security_group_actions/security_actions';

function CustomToggle({ children, handleClick }) {
  return (
    <div className="card-header" type="button" onClick={handleClick}>
      {children}
    </div>
  );
}

const Accordian = () => {
  /*
  Fetching the filtersdata from the
  redux store
  */
  const filterReduxState = useSelector((state) => state);
  let filterStateObject = filterReduxState?.security_reducers?.filtersData?.filterSelectedData;
  const dispatch = useDispatch();
  console.log(filterStateObject);
  // dispatch(create_group_filter_selection({pme:[]}));
  const [activeKey, setActiveKey] = useState(0);
  const data = [
    { name: "L1/L2", values: l1_l2 },
    { name: "Country Of Origin", values: countryOfOrigin },
    { name: "PME Group", values: PMEGroup },
    { name: "ProductGroupToInclude", values: productGroupToInclude},
    { name: "ProductGroupToExclude", values: productGroupToExclude},
    { name: "SecuritiesToInclude", values: securitiesToInclude},
    { name: "SecuritiesToExclude", values: securitiesToExclude},
    { name: "OptionInclusion", values: optionInclusion},
    { name: "Marginability", values: marginability}

  ];
  const [optioninclusion, setOptionInclusion] = useState();
  const [marginabilityData, setMarginabilityData] = useState();
  const [countryName, setCountryName] = useState();
  const [checkedItems, setCheckedItems] = useState(new Map());
  const [checkedProductGroupToInclude, setCheckedProductGroupToInclude] = useState(new Map());
  const [checkedProductGroupToExclude, setCheckedProductGroupToExclude] = useState(new Map());
  const [checkedlimitItems, setcheckedlimitItems] = useState(new Map());
  const [checkedSecuritiesToInclude, setCheckedSecuritiesToInclude] = useState([]);
  const [checkedSecuritiesToExclude, setCheckedSecuritiesToExclude] = useState([]);


  const handlePMECheckbox = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems(new Map(checkedItems.set(item, isChecked)));
    let pmeArray = filterStateObject?.pme? filterStateObject?.pme:[];
    if(pmeArray.indexOf(item) === -1 && isChecked) {
      pmeArray.push(item);
   }
    for (const item in filterStateObject) {
      filterStateObject[item] = pmeArray
    }
    
    console.log(filterStateObject)
    dispatch(create_group_filter_selection(filterStateObject));

  }

  const handleProductGroupToInclude = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedProductGroupToInclude(new Map(checkedProductGroupToInclude.set(item, isChecked)));
  }

  const handleProductGroupToExclude = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedProductGroupToExclude(new Map(checkedProductGroupToExclude.set(item, isChecked)));
  }

  const handleCheckedItems = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setcheckedlimitItems(new Map(checkedlimitItems.set(item, isChecked)));
  }

  return (
    <div className="App">
      <Accordion defaultActiveKey={0} activeKey={activeKey} onSelect={(e) => setActiveKey(e)} >
        {data.map((item, index) => (
          <Card key={index} style={{marginBottom: '10px'}}>
            <CustomToggle style={{borderBottom: '0px'}}
              as={Card.Header}
              eventKey={index}
              handleClick={() => {
                if (activeKey === index) {
                  setActiveKey(null);
                } else {
                  setActiveKey(index);
                }
              }}
            >
              <span style={{fontWeight: 'bold'}}>{activeKey === index ? "-     " : "+     "}</span>
              <span style={{fontWeight: 'bold'}}>{item.name}</span>
            </CustomToggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                {(item.name === "L1/L2") && <MultiSelectBox value={item.values} checkedItems={checkedlimitItems}  onChange={(e) => handleCheckedItems(e)} />}
                {(item.name === "Country Of Origin") && <RadioButton value={item.values} name="countryoforigin" onChange={(e) => setCountryName(e)} />}
                {(item.name === "PME Group") && <MultiSelectBox value={item.values} checkedItems={checkedItems} onChange={(e) => handlePMECheckbox(e)} />}
                {(item.name === "ProductGroupToInclude") && <MultiSelectBox value={item.values} checkedItems={checkedProductGroupToInclude} onChange={(e) => handleProductGroupToInclude(e)} />}
                {(item.name === "ProductGroupToExclude") && <MultiSelectBox value={item.values}  checkedItems={checkedProductGroupToExclude} onChange={(e) => handleProductGroupToExclude(e)} />}
                {(item.name === "SecuritiesToInclude") && <TickerSearch data={item.values} />}
                {(item.name === "SecuritiesToExclude") && <TickerSearch data={item.values} />}
                {(item.name === "OptionInclusion") && <RadioButton value={item.values} name="optionInclusion" onChange={(e) => setOptionInclusion(e.target.value)} />}
                {(item.name === "Marginability") && <RadioButton value={item.values} name="marginability" onChange={(e) => setMarginabilityData(e.target.value)} />}
              </Card.Body> 
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};
export default Accordian;
