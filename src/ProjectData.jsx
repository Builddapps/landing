// import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProjectsDataService from './firebase.service'
// import './artists.css'
const ProjectsData = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [twitter, setTwitter] = useState('')
  const [github, setGithub] = useState('')
  const [aim, setAim] = useState('')
  const notify = () => toast('Form submitted')
  // const [message, setMessage] = useState({error: false, msg: ''})
  const handleSubmit = async (e) => {
    e.preventDefault()
    // setMessage('')
    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      twitter === '' ||
      github === '' ||
      aim === ''
    ) {
      // setMessage({error: true, msg: "Add all fields"});
      return
    }
    const newProject = {
      name: name,
      email: email,
      phone: phone,
      twitter: twitter,
      github: github,
      aim: aim,
    }

    try {
      await ProjectsDataService.addProjects(newProject)
      // setMessage({error: false, msg: "new artist added"})
    } catch (err) {
      // setMessage({error: true, msg: err.message})
    }

    setName('')
    setEmail('')
    setPhone('')
    setTwitter('')
    setGithub('')
    setAim('')
  }
  return (
    <>
      <div className="bul3_form-container">
        <div className="descrip">
          <p>
            Submit the information of your <span>Dapp/Project</span>, <br /> We
            will review and get back to you. <br />{' '}
            <span className="underlined underline-clip">Build</span>
          </p>
        </div>
        <form className="form" action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            placeholder="Project Name & Link"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="number"
            name="Phone"
            placeholder="Phone"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <input
            type="text"
            name="Twitter"
            placeholder="Twitter link"
            required
            onChange={(e) => setTwitter(e.target.value)}
            value={twitter}
          />
          <input
            type="text"
            name="github"
            placeholder="Github link"
            required
            onChange={(e) => setGithub(e.target.value)}
            value={github}
          />
          <input
            type="text"
            name="Aim"
            placeholder="Project Description"
            onChange={(e) => setAim(e.target.value)}
            value={aim}
          />
          {email ? (
            <input
              type="submit"
              value="Submit"
              className="submit_button"
              onClick={notify}
            />
          ) : (
            <input
              type="submit"
              value="Submit"
              className="submit_button"
              disabled
            />
          )}
          <ToastContainer />
        </form>
      </div>
    </>
  )
}
export default ProjectsData
