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
		console.log(e.button);
		if (e.keyCode == 13 || e.button == 0) {
			setValues((oldState) => [...oldState, e.target.value]);
			setValue("");
		}
	};

  return (
    <main className="wrapper">
        <section className="search-inner">
          <input type="text" value={value} placeholder="Search" onChange={onChange} onKeyDown={handleKeyUp} />
          <img src={downloadImage} style={{height:'18px',width:'18px', padding: '2px'}}/>
          <span style={{fontWeight: '2px', color: 'rgb(224, 221, 221)', marginLeft: '3px'}}>or</span>
          <img src={excelImage} style={{height:'18px',width:'18px'}}/>
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
