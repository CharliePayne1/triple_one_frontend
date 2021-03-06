import React, {useState} from 'react'
import './App.css';
import API from './API'

export default function NewCaseForm() {
  const [symptoms, setSymptoms] = useState("")
  const [image_url, setImage_url] = useState("")
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [iconClicked, setIconClicked] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append("upload_preset", "triple_one")
    setLoading(true)
    const res = await fetch('https://api.cloudinary.com/v1_1/debtlnnlh/image/upload', {
      method: 'POST', 
      body: data
      }
      )
    const file = await res.json()
    setImage_url(file.secure_url)
    setLoading(false)
  }

  const submitForm = (e) => {
    e.preventDefault()
    API.submitNewCase(e, {symptoms, image_url, email})
    .then(newCase => {
      if (newCase.error) {
        alert("There seems to have been an issue submitting your case. Please submit symptoms and a valid email address.")
      } else {
        setFormSubmitted(true)
      }
    })
  }

  if (formSubmitted) {
    return (
        <h4 className="formSubmitted">Form Submitted Successfully</h4>
    )}
    return (
      <>
      {!iconClicked ?
      <div className="iconPage">
        <h2>Triple One</h2>
        <img onClick={setIconClicked} src="https://images.vexels.com/media/users/3/151981/isolated/preview/f8863741dba8034b3e1d4809a01c782a-stethoscope-icon-medical-icons-by-vexels.png" alt=""></img>
        <h5>Click the logo to begin</h5>
      </div> : 
      <div className="newCaseForm">
        <h5 className="newCaseTitle">Add a New Case</h5>
        <br></br>
        <span className="requiredFields"> * Required fields </span>
          <form onSubmit={submitForm}>
            <br></br>
            <textarea
              className="inputField symptoms"
              type="text" name="Symptoms"
              placeholder="Symptoms*"
              onChange={(e) => setSymptoms(e.target.value)}/>
            <br></br>
            <br></br>
            <input
              type="file" name="file"
              placeholder="Upload Image"
              onChange={uploadImage}/>
            {loading ? (<h5>Loading...</h5>) : (<img src={image_url} className="image" alt="" />)}
            <br></br>
            <br></br>
            <input
              className="inputField"
              type="text" name="Email"
              placeholder="Email*"
              onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            <br></br>
            <button className="newCaseButton" >Submit</button>
          </form>
        </div> }
      </>
    );
  }