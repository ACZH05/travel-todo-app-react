import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { UsersContext } from "../Contexts/usersContext";
import { checklist } from "../checklist";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { users, setUsers } = useContext(UsersContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      username: username,
      password: password,
      checklist: checklist,
      bucketlist: []
    }
    setUsers(...users, newUser)
    navigate("/login")
  }

  return (
    <Container className="position-absolute top-50 start-50 translate-middle border border-2 p-5 rounded" style={{ width: "30%" }}>
      <Form onSubmit={handleSubmit}>
        <h1 className="mb-3">Register</h1>
        <Form.Group className="mb-4">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
        </Form.Group>
        <Button type="submit" className="mb-3 py-2" style={{ width: "100%"}}>Register</Button>
        <p className="text-center"><a href="/login">Got an account? Log in here!</a></p>
      </Form>
    </Container>
  )
}
