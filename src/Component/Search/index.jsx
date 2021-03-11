import React, { useRef } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Search = ({ onFilter }) => {
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnchange = (e) => {
    if (!onFilter) return;
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      onFilter(e.target.value);
    }, 500);
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex p-3  justify-content-start align-items-center "
    >
      <Form.Group controlId="formBasicEmail" className="mr-3">
        <Form.Control
          type="text"
          placeholder="Search..."
          onChange={handleOnchange}
        />
      </Form.Group>
    </Form>
  );
};

export default Search;
