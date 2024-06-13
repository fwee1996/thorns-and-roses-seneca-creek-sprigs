import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllNurseries, modifyNursery } from '../../services/nurseryServices'

export const EditNursery = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [nurseryBeingEdited, setNurseryBeingEdited] = useState({})

  useEffect(() => {
    getAllNurseries().then(nurseriesArray => {
      const nursery = nurseriesArray.find(nursery => nursery.id === parseInt(id))
      setNurseryBeingEdited(nursery)
    })
  }, [id])

  const handleEditSave = async (event) => {
    event.preventDefault()
      await modifyNursery(nurseryBeingEdited)
      navigate('/nurseries')  
  }

  const handleCancel = () => {
    navigate('/nurseries')
  }

  return (
    <div>
      <h2>Edit Nursery</h2>
      <form >
        
        <div className='form-group'>
          <label>Business Name: </label>
          <input
            type='text'
            className='form-control'
            value={nurseryBeingEdited.businessName || ''}
            onChange={(event) =>
              setNurseryBeingEdited({ ...nurseryBeingEdited, businessName: event.target.value })
            }
          />
        </div>

        <div className='button-group'>
          <button type='submit' className='btn btn-success' onClick={handleEditSave}>Save</button>
          <button type='button' className='btn btn-warning' onClick={handleCancel}>Cancel</button>
        </div>

      </form>
    </div>
  )
}
