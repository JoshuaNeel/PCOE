import { useState } from 'react';

const MultiSelectCheckBox = ({name, checked=false, onChange}) => {

    return (
        <input style={{width: '12px', boxShadow: 'none', height: '12px', marginRight: '4px'}} type="checkbox" name={name} checked={checked} onChange={onChange} />
    )
}

export default MultiSelectCheckBox;


const RenderingMultiselectCheckBox = () => {
    const checkboxes = [
        {
          name: 'check-box-1',
          key: 'checkBox1',
          label: 'Check Box 1',
        },
        {
          name: 'check-box-2',
          key: 'checkBox2',
          label: 'Check Box 2',
        },
        {
          name: 'check-box-3',
          key: 'checkBox3',
          label: 'Check Box 3',
        },
        {
          name: 'check-box-4',
          key: 'checkBox4',
          label: 'Check Box 4',
        },
      ];
      const [checkedItems, setCheckedItems] = useState(new Map());

      const handleChange = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        // setCheckedItems(prevState => ({ 
        //     checkedItems: {
        //         ...prevState,
        //         item: isChecked
        //     }
        // }));
        setCheckedItems(new Map(checkedItems.set(item, isChecked)));
        }

      return (
        <section style={{display: "grid"}}>
          {
          checkboxes.map(item => (
            <label key={item.key}>
              <MultiSelectCheckBox name={item.name} checked={checkedItems.get(item.name)}  onChange={(e) => handleChange(e)} />
              {item.name}
            </label>
          ))
        }
        </section>
      );
}
