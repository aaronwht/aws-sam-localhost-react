import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
  const [testData, setTestData] = useState()
   
  useEffect(() => {
   (async () => {
     getData()
     postData()
   })()
 }, [])
  
  async function getData() {
    const { data } = await axios.get(`http://localhost:3030/test`)
    setTestData(data) 
  }

  async function postData() {
    const data = await axios.post(`http://localhost:3030/`, {
      firstName: 'Bill',
      lastName: 'Smith'
    })
    console.log(data)
  }
  return (<div className="App">{testData}</div>)
}



