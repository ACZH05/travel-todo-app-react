import { Button, Container, Form } from "react-bootstrap";

export default function Register() {
  return (
    <Container className="position-absolute top-50 start-50 translate-middle border border-2 p-5 rounded" style={{ width: "30%" }}>
      <h1 className="mb-3">Register</h1>
      <Form.Group className="mb-4">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" required />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" required />
      </Form.Group>
      <Button className="mb-3 py-2" style={{ width: "100%"}}>Login</Button>
      <p className="text-center"><a href="/login">Got an account? Log in here!</a></p>
    </Container>
  )
}
