import { useEffect, useState } from "react"
import { EmployeeViews } from "./EmployeeViews.jsx"



export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localSprigUser = localStorage.getItem("sprig_user")
    const localSprigObject = JSON.parse(localSprigUser)

    setCurrentUser(localSprigObject)
  }, [])

  return (
    <EmployeeViews /> 
  )
}