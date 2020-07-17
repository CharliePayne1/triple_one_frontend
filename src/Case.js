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
    
    return fetch(`http://localhost:3000/cases/${c.id}`, configObject)
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
      <>
      <h5>Case No. {c.id}</h5>
      <p>Symptoms: {c.symptoms}</p>
      <button onClick={expand}>Expand</button>
      </>
      : 
      <>
      <br></br>
      <br></br>
      <button onClick={close}>Close</button>
      <br></br>
      <br></br>
      <img src={c.image_url} width= "300px"></img>
      <h5>Symptoms: {c.symptoms}</h5>
      <button value="go to hospital" onClick={(e) => hospital(e)}>Hospital</button>
      <button value="stay home" onClick={(e) => stayHome(e)}>Stay Home</button>
      </> }
      </>
    );
  }