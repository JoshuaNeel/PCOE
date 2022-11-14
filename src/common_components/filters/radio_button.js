
export const RadioButton = (props) => {

  return (
    <section style={{display: "grid"}}>
      {props.value.map((radioItem, index) => (
        <label key={index}>
            <input style={{width: '12px', height: '12px',boxShadow: 'none', marginRight: '3px'}} id="radioButtonOptions" type="radio" value={radioItem} name={props.name} onChange={props.onChange} />
            {radioItem}
        </label>
      ))}
    </section>
  )
}
