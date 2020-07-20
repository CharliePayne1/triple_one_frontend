import React from 'react'
import NewCaseForm from './NewCaseForm'
import LogIn from './LogIn'

export default function Public({handleSubmit}) {
    return (
      <>
        < LogIn handleSubmit={handleSubmit}/>
        < NewCaseForm />
      </>
    );
  }