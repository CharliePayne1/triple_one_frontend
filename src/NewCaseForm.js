import React, {useState} from 'react'
import './App.css';
import API from './API'

export default function NewCaseForm() {
  const [symptoms, setSymptoms] = useState("")
  const [image_url, setImage_url] = useState("")
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

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

  const submitForm = () => {
    setFormSubmitted(!formSubmitted)
  }

  if (formSubmitted) {return (<h1>Form Submitted </h1>)}
    return (
      <>
        <h5>New Case</h5>
          <form onSubmit={(e) => API.submitNewCase(e, {symptoms, image_url, email}, submitForm)}>
            <textarea type="text" name="Symptoms" placeholder="Symptoms" onChange={(e) => setSymptoms(e.target.value)}/>
            <br></br>
            <br></br>
            <input type="file" name="file" placeholder="Upload Image" onChange={uploadImage}/>
            {loading ? (<h5>Loading...</h5>) : (<img src={image_url} className="image" alt="" />)}
            <br></br>
            <br></br>
            <input type="text" name="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            <br></br>
            <button>Submit</button>
          </form>
      </>
    );
  }