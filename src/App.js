import React, { useEffect } from 'react'
import axios from 'axios'

export default () => {
  useEffect(() => {
    post()
  }, [])
  async function post() {
    const { data } = await axios.post(`http://localhost:3000/`, {
      'name': 'bill'
    })
    console.log(data)
  }
  return (<div className="App" />)
}



