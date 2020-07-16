import React from 'react'
import CaseContainer from './CaseContainer'

export default function Private({logout}) {
    return (
      <>
        <h5>Private</h5>
        <button onClick={() => logout()}>Logout</button>
        < CaseContainer />
      </>
    );
  }