import React, {useState, useEffect} from 'react'
import CaseContainer from './CaseContainer'
import API from './API';

export default function Private({logout}) {
  const [cases, setCases] = useState([])

    useEffect(() => {
      API.getCases()
      .then(cases => setCases(cases.cases))
      .catch(error => console.log(error.message));
    }, [])

    const filter = (id) => {
      setCases(cases.filter(c => c.id !== id))
    }

    return (
      <>

        <button className="greyButton" onClick={() => logout()}>Logout</button>
        < CaseContainer cases={cases} filter={filter}/>
      </>
    );
  }