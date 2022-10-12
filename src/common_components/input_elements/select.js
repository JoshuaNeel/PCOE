import Form from 'react-bootstrap/Form';

function Select() {
  return (
    <>
    <Form.Label className={'rule_effect_label'}>Group</Form.Label>
    <Form.Select style = {{width:'300px',display:"inline-block"}} aria-label="Default select">
      <option>Select</option>
      <option value="1">Group1</option>
      <option value="2">Group2</option>
      <option value="3">Group3</option>
    </Form.Select>
    </>
  );
}

export default Select;