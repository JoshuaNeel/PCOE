import { useState, useEffect } from "react";
import "./listGroupStyles.scss";
import downloadImage from '../assets/images/download.png';
import excelImage from '../assets/images/excel.png';
import ButtonCompnent from "./input_elements/button";
import { useDispatch, useSelector } from 'react-redux';
import {tickers_view_grid_data, tickers_new_grid_data} from '../actions/security_group_actions/security_actions';
import { TickerDropDown, SelectedTickers } from "./ticker_search_dropdown";
import Form from 'react-bootstrap/Form';


var data = require("./MOCK_DATA.json");

export default function TickerSearch() {
  const [value, setValue] = useState("");
  const optionList = [];
  const [values, setValues] = useState([]);
  const [updatedSecurities, setUpdatedSecurities] = useState([]);
  const dispatch =useDispatch();

  useEffect(() => {
    dispatch(tickers_view_grid_data())
  }, []);

  const securityGroupData = useSelector((state) => state.security_reducers);  

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm, group) => {
    const ticker = searchTerm;
    const isin = group;
    setValue(searchTerm);
    optionList.push(searchTerm);
    const temp = {
      ticker,
      isin,
      cusip:"74589625",
      ml_securities:"09879",
      security_type: ['equity','options'],
      country_listing: 'US'
    };
    setUpdatedSecurities((oldState) => [...oldState, temp])
    setValues((oldState) => [...oldState, {searchTerm, group}]);
    setValue("");
  };
  const onClickAdd = () => {
    const updatedTickerData = [...securityGroupData.tickersData.tickersViewData.data, ...updatedSecurities];
    dispatch(tickers_new_grid_data({data:updatedTickerData}));
    setValues([]);
  }

  const buttonstyle = {
    fontSize: '16px',
    height:'30px',
    backgroundColor: "rgba(2,33,105,1)",
    borderRadius: "4px",
    lineHeight: "0",
    color: "white",
    border: "none",
    outline: "none",
    width: '80px'
};

  return (
    <main className="wrapper">
        <section className="search-inner" style={{display: 'flex', flexDirection: 'row'}}>
           <Form.Control type="text" value={value} placeholder="Search" onChange={(e) => onChange(e)} />
          <img src={excelImage} style={{height:'24p',width:'24px', padding: '5px'}} />
          <span style={{fontSize:'10px', marginTop: '12px'}}>Or</span>
          <img src={downloadImage} style={{height:'24p',width:'24px', padding: '5px'}} />
        </section>
        <section className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                (fullName.startsWith(searchTerm) || item.group.startsWith(searchTerm))&&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <TickerDropDown item={item} onSearch = {onSearch} />
            ))}
                { (values.length > 0) && 
                  <section style={{display: 'flex', flexDirection: 'column', marginLeft: '0px', alignItems: 'flex-end'}} >
                    <SelectedTickers values={values} />
                    <ButtonCompnent clickEvent={onClickAdd} labelValue="Add" buttonStyles={buttonstyle}/>
                </section>
                }
        </section>
      </main>
  );
}
