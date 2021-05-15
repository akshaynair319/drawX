import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import InputForm from "./InputForm";

import Array from "./Array";

const AddArray = (props) => {
  const [arrays, setArrays] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const makeArray = (name, inputArray) => {
    toggle();
    let currentArray = arrays;
    const newArray = (name + " " + inputArray).split(" ");
    currentArray.push(newArray);
    setArrays(currentArray);
  };
  return (
    <div className="text-center">
      <Button color="primary" onClick={toggle}>
        Add new Array
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Enter Array Details</ModalHeader>
        <ModalBody>
          <InputForm makeArray={makeArray} />
        </ModalBody>
      </Modal>
      {arrays.map((array) => (
        <Array array={array} />
      ))}
    </div>
  );
};

export default AddArray;
