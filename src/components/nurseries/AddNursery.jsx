import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createNewNursery } from '../../services/nurseryServices' 

export const AddNursery = ({currentUser}) => {
    const [newNursery, setNewNursery] = useState({ businessName: '' })
    const navigate = useNavigate() // useNavigate hook

    const handleAddNursery = async (event) => {
        event.preventDefault() // prevent default form submission
        if (!newNursery.businessName) {
            alert('Please fill out the businessName!')
            return
        }
        const nursery = {
            businessName: newNursery.businessName
        }
        await createNewNursery(nursery)
        setNewNursery({ businessName: '' }) // clear input fields

        navigate('/nurseries') // navigate back to nurseries after saving
    }

    return (
        <form>
            <div className="form-group">
                <label>Business Name : </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Business Name"
                    value={newNursery.businessName}
                    // Update the newNursery state with the value typed by the user:
                    onChange={(event) => setNewNursery({ ...newNursery, businessName: event.target.value })}
                    // spread operator (...) creates copy of existing state object, newNursery with all its existing properties being preserved (synopsis and url), except user input of title 
                />
            </div>

            <div className="button-group">
                <button type="submit" className="btn btn-success" onClick={handleAddNursery}>
                    Save Nursery
                </button>
            </div>
        </form>
    )
}
