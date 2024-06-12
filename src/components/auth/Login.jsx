import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getUserByEmail } from "../../services/userService";
import { Button, Form } from "react-bootstrap";

export const Login = () => {
  const [email, set] = useState("susan.phillips@example.com");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "sprig_user",
          JSON.stringify({
            id: user.id,
            isStaff: user.isStaff,
          })
        );

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main>
      <section>
        <Form onSubmit={handleLogin}>
          <h1>Seneca Creek Sprigs</h1>
          <h2>Please sign in</h2>
          <Form.Group>
              <Form.Control
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                placeholder="Email address"
                required
                autoFocus
              />
          </Form.Group>
          <Form.Group>
              <Button className="login-button" variant="light" type="submit">
                Sign in
              </Button>
          </Form.Group>
        </Form>
      </section>
      <section>
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  );
};
