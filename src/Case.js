import React, {useState} from 'react'

export default function Case({c}) {
  const [selected, setSelected] = useState(false)

  const expand = () => {
    setSelected(true)
  }

  const close = () => {
    setSelected(false)
  }

  const hospital = () => {
    
  }

  const stayHome = () => {

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
      <img src={c.image_url}></img>
      <h5>Symptoms: {c.symptoms}</h5>
      <button value="go to hospital" onClick={() => hospital()}>Hospital</button>
      <button value="stay home" onClick={() => stayHome()}>Stay Home</button>
      </> }
      </>
    );
  }