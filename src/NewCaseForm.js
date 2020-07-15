import React from 'react'

export default function NewCaseForm() {
    return (
      <>
        <h5>New Case</h5>
        <select>
        <option  value="select">- Select Category -</option>
            <option  value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
        </select>
        <br></br>
        <br></br>
        <input type="text" value="Symptoms"placeholder="Symptoms"></input>
        <br></br>
        <br></br>
        <input type="text" value="Image"placeholder="Image"></input>
        <br></br>
        <br></br>
        <input type="text" value="Email"placeholder="Email"></input>
        <br></br>
        <br></br>
        <button>Submit</button>
      </>
    );
  }