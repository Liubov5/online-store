import React from 'react'
import { useParams } from 'react-router-dom'

const EditDevice = () => {
    const {id} = useParams()
  return (
    <div>EditDevice {id} </div>
  )
}

export default EditDevice