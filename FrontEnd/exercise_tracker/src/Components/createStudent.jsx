import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Form } from 'react-router-dom';
import { toast } from 'react-hot-toast';

 const CreateStudent = () => {

  const createStudentFn = async(e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const formEntries = Object.fromEntries(data.entries());

    console.log(formEntries);

    await fetch("http://localhost:5172/api/students/create", {
      method: "POST",
      body: JSON.stringify(formEntries),
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, application/json, text/plain",
      },
      mode: "cors",
    }).then((data) => {
      data.json().then((resp) => {
        if(resp.message === 'student added successfully'){
          console.log(resp.student);
          toast.success("Student added successfully");
        }
      });
    });

  };


  return (
    <div className="cardbody">
      <Form
        action=""
        method="POST"
        onSubmit={createStudentFn}
        className="form-create-student"
      >
        <div className="div-input-create-s">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter student name"
            className="form-control"
          />
        </div>
        <div>
          <input type="submit" value="create" className="formButton" />
        </div>
      </Form>
    </div>
  );
}

CreateStudent.propTypes = {};

export default CreateStudent;
