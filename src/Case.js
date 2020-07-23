import React, {useState} from 'react'

export default function Case({c, filter}) {
  const [selected, setSelected] = useState(false)

  const expand = () => {
    setSelected(true)
  }

  const close = () => {
    setSelected(false)
  }

  const patch = (decision) => {
    const configObject = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      "Authorization": localStorage.token
    },
    body: JSON.stringify({
    decision: `${decision}`
    })
    };
    
    return fetch(`https://this-is-testing.herokuapp.com/cases/${c.id}`, configObject)
    .then(resp => resp.json()).then(updatedCase => filter(updatedCase.id))
  }

  const hospital = (e) => {
    patch(e.target.value)
  }

  const stayHome = (e) => {
    patch(e.target.value)
  }


    return (
      <>
      {!selected ? 
      <div className="smallCase">
        <h4>Case No. {c.id}</h4>
        <p>Symptoms: {c.symptoms}</p>
        <button className="button" onClick={expand}> Expand</button>
      </div>
      : 
      <div className="largeCase">
        <button className="closeButton" onClick={close}>X</button>
        <br></br>
        <h2 className="caseDetails">Case No. {c.id}</h2>
        <br></br>
        <img src={c.image_url} width= "300px" alt=""></img>
        <h5 className="caseDetails">Symptoms: {c.symptoms}</h5>
        <button className="redButton" value="go to hospital" onClick={(e) => hospital(e)}>Go To Hospital</button>
        <button className="homeButton" value="stay home" onClick={(e) => stayHome(e)}>Stay Home</button>
      </div> }
      </>
    );
  }