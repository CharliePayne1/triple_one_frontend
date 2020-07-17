import React, {useState} from 'react'
import './App.css';

export default function NewCaseForm() {

  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

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
    setImage(file.secure_url)
    setLoading(false)
  }

    return (
      <>
        <h5>New Case</h5>
        <select>
              <option>- Select Category -</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
        </select>
        <br></br>
        <br></br>
        <input type="text" name="Symptoms" placeholder="Symptoms"/>
        <br></br>
        <br></br>
        <input type="file" name="file" placeholder="Upload Image" onChange={uploadImage}/>
        {loading ? (<h5>Loading...</h5>) : (<img src={image} className="image" alt="" />)}
        <br></br>
        <br></br>
        <input type="text" name="Email" placeholder="Email"/>
        <br></br>
        <br></br>
        <button>Submit</button>
      </>
    );
  }