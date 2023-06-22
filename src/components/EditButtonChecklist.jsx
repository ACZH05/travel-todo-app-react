import { useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { UsersContext } from "../Contexts/usersContext"
import { AuthContext } from "../Contexts/AuthContext"

export default function EditButtonChecklist({ isDelete, setIsDelete }) {
    const [addList, setAddList] = useState("")
    const token = useContext(AuthContext).token
    const {users, setUsers} = useContext(UsersContext)
    
    const handleAdd = (e) => {
        e.preventDefault()
        const updatedUsers = [...users]
      
        const filterUser = updatedUsers.find((user) => user.username === token)
        if (filterUser) {
            const newItem = {
                item: addList,
                homeCheckStatus: false,
                hotelCheckStatus: false
            }
          filterUser.checklist.push(newItem)
        }
        setUsers(updatedUsers)
    }

    if (!isDelete) {
    return (
    <div>
        <Button className="position-absolute sticky-bottom end-0 m-5 px-4 py-2" onClick={() => setIsDelete(true)}><i className="bi bi-pencil-square me-2" />Edit</Button>
    </div>
    )} else {
        return (
            <div>
                <Form className="d-flex position-absolute sticky-bottom end-0 m-5" onSubmit={handleAdd}>
                    <Form.Control type="text" className="me-3" value={addList} onChange={(e) => setAddList(e.target.value)}></Form.Control>
                    <Button variant="secondary" className="me-3 px-4 py-2" onClick={() => setIsDelete(false)}>Cancel</Button>
                    <Button type="submit" className="px-4 py-2" onClick={() => setIsDelete(true)}>Add</Button>
                </Form>
            </div>
        )
    }
}
