

export const MultiSelectBox = (props) => {

  return (
    <section style={{display: "grid"}}>
      {props.value.map((checkItem, index) => (
        <label key={index}>
            <input style={{width: '12px', height: '12px',boxShadow: 'none', marginRight: '3px'}} type="checkbox" name={checkItem} checked={props.checkedItems.get(checkItem)} onChange={props.onChange} />
            {checkItem}
        </label>
      ))}
    </section>
  )

}

