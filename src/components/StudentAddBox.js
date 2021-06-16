import React, { Fragment, useState } from "react";

const StudentAddBox = () => {
  const [studentNumber, setStudentNumber] = useState();
  const [classIn, setClassIn] = useState();
  const [major, setMajor] = useState("");
  const [studentName, setStudentName] = useState("");

  const url = process.env.REACT_APP_STUDENT_ROUTE;

  const submitFormHandler = async (event) => {
    event.preventDefault();
    console.table({ studentNumber, classIn, major, studentName });
    // /*
    try {
      const newStudent = { studentNumber, classIn, major, studentName };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // mode: "no-cors",
        body: JSON.stringify(newStudent),
        // console.log(body);
      });

      console.log(res);
      // reset all state variables
      setStudentNumber();
      setClassIn();
      setMajor("");
      setStudentName("");
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
    // */
  };

  const studentNumberChangeHandler = (event) => {
    setStudentNumber(event.target.value);
  };

  const classInChangeHandler = (event) => {
    setClassIn(event.target.value);
  };

  const majorChangeHandler = (event) => {
    setMajor(event.target.value);
  };

  const studentNameChangeHandler = (event) => {
    setStudentName(event.target.value);
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome To Student Section</h1>
      <h3>Add New Student:</h3>

      <form onSubmit={submitFormHandler} className="mt-5">
        {/* className="d-flex" */}
        <label htmlFor="studentNumberInput">Student Number:</label>
        <input
          type="text"
          name="studentNumberInput"
          id="studentNumberInput"
          className="form-control"
          value={studentNumber}
          onChange={studentNumberChangeHandler}
        />

        <label htmlFor="classInput">Class:</label>
        <input
          type="text"
          name="classInput"
          id="classInput"
          className="form-control"
          value={classIn}
          onChange={classInChangeHandler}
        />

        <label htmlFor="majorInput">Major:</label>
        <input
          type="text"
          name="majorInput"
          id="majorInput"
          className="form-control"
          value={major}
          onChange={majorChangeHandler}
        />

        <label htmlFor="studentNameInput">Student Name:</label>
        <input
          type="text"
          name="studentNameInput"
          id="studentNameInput"
          className="form-control"
          value={studentName}
          onChange={studentNameChangeHandler}
        />

        {/* <input type='' value="Add Student" className="btn btn-success" /> */}
        <button className="btn btn-success">Add Student</button>
      </form>
      {/* <p>No Student</p> */}
    </Fragment>
  );
};

export default StudentAddBox;
