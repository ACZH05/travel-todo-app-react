import { Badge, Button, Card, Container } from "react-bootstrap";

export default function Bucketlist() {
  return (
    <Container>
        <h1 className="my-3">Bucket list</h1>
        <Card className="border-danger" style={{ "min-width": "20rem","max-width": "25rem"}}>
            <Card.Body>
                <Card.Title>Not completed task card example</Card.Title>
                <Card.Text>Time: 10pm</Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="danger"><i className="bi bi-trash"></i></Button>
                    <Button variant="danger" className=""><i className="bi bi-x-lg" /></Button>
                </div>
            </Card.Body>
        </Card>
        <Card className="border-success mt-5" style={{ "min-width": "20rem","max-width": "25rem"}}>
            <Card.Body>
                <Card.Title>Completed task card example</Card.Title>
                <Card.Text>Time: 10pm</Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="danger"><i className="bi bi-trash"></i></Button>
                    <Button variant="success" className=""><i className="bi bi-check-lg" /></Button>
                </div>
            </Card.Body>
        </Card>
        <Button className="position-absolute sticky-bottom end-0 m-5 px-4 py-2"><i className="bi bi-pencil-square me-2" />Edit</Button>
    </Container>
  )
}
