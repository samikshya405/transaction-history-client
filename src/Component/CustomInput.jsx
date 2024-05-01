import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const CustomINput=({label,...rest})=> {
  return (
   
      <Form.Group className="mb-3" >
        {
          label && <Form.Label>{label}</Form.Label>
        }
        
        <Form.Control 
        {...rest} />
        
      </Form.Group>

     
      
   
  );
}

