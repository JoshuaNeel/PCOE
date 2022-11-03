import { useState } from 'react';

const RadioButton = (props) => {

    return (
                <input style={{width: '12px', height: '12px',boxShadow: 'none', marginRight: '3px'}} id="radioButtonOptions" type="radio" value={props.value} name={props.name} onChange={props.onChange} />
    )
}

export default RadioButton;


const RenderRadioButton = (props) => {
    const radiobuttons = [
        {
          name: 'gender',
          key: 'Female',
          value: 'Female',
        },
        {
          name: 'gender',
          key: 'Male',
          value: 'Male',
        },
        {
          name: 'gender',
          key: 'Others',
          value: 'Others',
        },
      ];


    const [radioButtonValue, setRadioButtonValue] = useState();
    const handleRadiobutton = (e) => {
      setRadioButtonValue(e.target.value);
    }

    return (
        <section style={{display: "grid"}}>
          {
          radiobuttons.map(item => (
            <label key={item.key}>
              <RadioButton value={item.value} name={item.name} onChange={(e) => handleRadiobutton(e)} />
              {item.value}
            </label>
          ))
        }
        </section>
    );
}
