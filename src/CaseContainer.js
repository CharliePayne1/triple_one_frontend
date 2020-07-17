import React from 'react'
import Case from './Case'

export default function CaseContainer({cases, filter}) {

   const renderCase = () => {
    return cases.map(c => < Case key={c.id} c={c} filter={filter}/>)
    }
  
    return (
      <>
        <h5>{cases.length} New cases to review</h5>
        {renderCase()}
      </>
    );
  }