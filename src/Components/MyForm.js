import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions with the form data, like sending it to a server
    console.log('Form Submitted',formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="textarea" name="message" id="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} />
      </FormGroup>
      <Button color="primary" type="submit">Submit</Button>
    </Form>
  );
};

export default MyForm;
