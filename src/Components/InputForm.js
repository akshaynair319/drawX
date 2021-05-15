import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const InputForm = ({ makeArray }) => {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    makeArray(name, input);
  };
  return (
    <Form className="text-center" onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="ArraySize" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Enter Values
        </Label>
        <Col sm={10}>
          <Input
            type="textarea"
            name="text"
            id="input"
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        </Col>
      </FormGroup>

      <Button className="mt-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default InputForm;
