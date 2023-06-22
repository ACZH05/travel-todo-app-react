import { Button, Container } from "react-bootstrap";
import ShowChecklist from "../components/ShowChecklist";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Checklist() {
    const [isDelete, setIsDelete] = useState("")
    const token = useContext(AuthContext).token

    return (
    <Container className="">
        <h1  className="my-3">Checklist</h1>
        <table id="displayUserInfo" className="table">
            <thead className="px-1 text-center">
                <tr>
                    <th className="col-sm-1">#</th>
                    <th className="col-sm-7">Items</th>
                    <th className="col-sm-2">Before leaving home</th>
                    <th className="col-sm-2">Before leaving hotel</th>
                    {isDelete && <th>Delete</th>}
                </tr>
            </thead>
            <tbody className="text-start">
                <ShowChecklist />
            </tbody>
        </table>
    <Button className="position-absolute sticky-bottom end-0 m-5 px-4 py-2" onClick={() => setIsDelete(true)}><i className="bi bi-pencil-square me-2" />Edit</Button>
    </Container>
    )
}
