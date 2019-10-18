import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
  const [message, setMessage] = useState('Waiting for number to be returned...')
  const [id, setId] = useState()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [displayName, setDisplayName] = useState()
  
  useEffect(() => {
    (async () => {
      getData()
    })()
  }, [])
  
  function handleChange(e) {
    e.preventDefault()

    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value)
        break
      case 'lastName':
        setLastName(e.target.value)
        break
      default:
        break
    }
  }

  async function getData() {
    const { data } = await axios.get(`http://localhost:3030/test`)
    setMessage(data)
  }

  async function handleSubmit() {
    setId('')
    setFirstName('')
    setLastName('')
    setDisplayName('Waiting on name to be returned...')

    const { data }  = await axios.post(`http://localhost:3030`, { firstName, lastName })
    setId(data.id)
    setDisplayName(data.firstName + ' ' + data.lastName)
  }

  return (
    <div className="App" style={{ padding: '15px'}}>
      <form onSubmit={() => handleSubmit()}>
        <div style={{ height: '25px'}}>{ message }</div>
        <div style={{ height: '25px'}}>
          { displayName && id + ' ' + displayName }
        </div>

        First Name:<br/>
        <input type="text" value={firstName} name="firstName" onChange={handleChange} /><br/><br/>

        Last Name:<br/>
        <input type="text" value={lastName} name="lastName" onChange={handleChange} /><br/>

        <button type="button" onClick={() => handleSubmit()}>Submit</button>
      </form>
  </div>
  )
}



