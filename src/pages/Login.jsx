import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";


export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Container className="position-absolute top-50 start-50 translate-middle border border-2 p-5 rounded" style={{ width: "30%" }}>
      <Form>
        <h1 className="mb-3">Login</h1>
        <Form.Group className="mb-4">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
        </Form.Group>
        <Button type="submit" className="mb-3 py-2" style={{ width: "100%"}}>Login</Button>
        <p className="text-center"><a href="/register">First time using this app? Register here!</a></p>
      </Form>
    </Container>
  )
}
