import { useEffect, useState } from "react"
import { EmployeeViews } from "./EmployeeViews.jsx"
import { CustomerViews } from "./CustomerViews.jsx"



export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localSprigUser = localStorage.getItem("sprig_user")
    const sprigUserObject = JSON.parse(localSprigUser)

    setCurrentUser(sprigUserObject)
  }, [])

  return currentUser.isStaff ? (
    <EmployeeViews currentUser={currentUser} /> 
  ) : ( 
  <CustomerViews currentUser={currentUser}/>
  )
}