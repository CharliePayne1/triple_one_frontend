import React, {useState, useEffect} from 'react'
import CaseContainer from './CaseContainer'

export default function Private({logout}) {
  const [cases, setCases] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/cases')
      .then(resp => resp.json())
      .then(cases => setCases(cases.cases))
      .catch(error => console.log(error.message));
    }, [])

    return (
      <>
        <button onClick={() => logout()}>Logout</button>
        < CaseContainer cases={cases}/>
      </>
    );
  }