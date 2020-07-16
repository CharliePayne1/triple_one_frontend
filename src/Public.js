import React from 'react'
import NewCaseForm from './NewCaseForm'
import LogIn from './LogIn'

export default function Public({handleSubmit}) {
    return (
      <>
        <h5>Public</h5>
        < LogIn handleSubmit={handleSubmit}/>
        < NewCaseForm />
      </>
    );
  }