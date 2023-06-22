import { Button } from "react-bootstrap"

export default function EditButtonChecklist({ isDelete, setIsDelete }) {

    if (!isDelete) {
    return (
    <div>
        <Button className="position-absolute sticky-bottom end-0 m-5 px-4 py-2" onClick={() => setIsDelete(true)}><i className="bi bi-pencil-square me-2" />Edit</Button>
    </div>
    )} else {
        return (
            <div className="d-flex position-absolute sticky-bottom end-0 m-5">
                <Button variant="secondary" className="me-3 px-4 py-2" onClick={() => setIsDelete(false)}><i className="bi bi-x-lg me-2" />Cancel</Button>
                <Button className="px-4 py-2" onClick={() => setIsDelete(true)}><i className="bi bi-plus-lg me-2" />Add</Button>
            </div>
        )
    }
}
