import { useState } from "react";
import "./listGroupStyles.scss";
import downloadImage from '../assets/images/download.png';
import excelImage from '../assets/images/excel.png';

var data = require("./MOCK_DATA.json");

export default function TickerSearch() {
  const [value, setValue] = useState("");
  const optionList = [];
  const [values, setValues] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    optionList.push(searchTerm);
  };

  const handleKeyUp = (e) => {
		if (e.keyCode == 13 || e.button == 0) {
			setValues((oldState) => [...oldState, e.target.value]);
			setValue("");
		}
	};

  return (
    <main className="wrapper" style={{width: "500px"}}>
      <section style={{display: 'flex', flexDirection: 'row'}} >
        {values.map((item,index) => (
          <section className="tag-item" key={item} >
            {item}
            <button style={{backgroundColor: 'transparent', color: 'grey', boxShadow: 'none'}}
              type="button"
              className="button"
              onClick={() => handleDelete(item, index)}
            >
              &times;
            </button>
          </section>
				))}
        </section>
        <section className="search-inner" style={{display: 'flex', flexDirection: 'row'}}>
          <input type="text" value={value} placeholder="Search" onChange={onChange}
           onKeyDown={handleKeyUp} style={{ height: '25px', width: '300px', marginRight: '5px', border: '0px', boxShadow: 'none'}} />
          {/* <button onClick={() => onSearch(value)}> Search </button> */}
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
              <section
                className="dropdown-row"
                style={{display: 'grid', marginLeft: '0px', paddingTop: '4px', boxShadow: 'grey'}}
                onClick={() => onSearch(item.full_name)}
                key={item.full_name}
              >
                <p style={{backgroundColor: 'rgba(2,33,105,1)', fontWeight: 'bold'}}>{item.group}</p>
                <p>{item.full_name}</p>
              </section>
            ))}
        </section>
      </main>
  );
}
