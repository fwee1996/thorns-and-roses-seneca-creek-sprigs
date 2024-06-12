import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getUserByEmail } from "../../services/userService"
import { Button } from "react-bootstrap"

export const Register = (props) => {
  const [customer, setCustomer] = useState({
    email: "",
    fullName: "",
    isStaff: false,
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    createUser(customer).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "sprig_user",
          JSON.stringify({
            id: createdUser.id,
            staff: createdUser.isStaff,
          })
        )

        navigate("/")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getUserByEmail(customer.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewUser()
      }
    })
  }

  const updateCustomer = (evt) => {
    const copy = { ...customer }
    copy[evt.target.id] = evt.target.value
    setCustomer(copy)
  }

  return (
    <main style={{ textAlign: "center" }}>
      <form onSubmit={handleRegister}>
        <h1>Seneca Creek Sprigs</h1>
        <h2>Please Register</h2>
        <fieldset>
          <div>
            <input
              onChange={updateCustomer}
              type="text"
              id="fullName"
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <input
              onChange={updateCustomer}
              type="email"
              id="email"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>
              <input
                onChange={(evt) => {
                  const copy = { ...customer }
                  copy.isStaff = evt.target.checked
                  setCustomer(copy)
                }}
                type="checkbox"
                id="isStaff"
              />
              I am an employee{" "}
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <Button variant="light" type="submit">
              Register
            </Button>
          </div>
        </fieldset>
      </form>
    </main>
  )
}