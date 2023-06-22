import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"
import { Button, Form } from "react-bootstrap"
import { UsersContext } from "../Contexts/usersContext"

function ShowChecklist({handleHomeCheck, handleHotelCheck, isDelete}) {
    const token =useContext(AuthContext).token
    const users = useContext(UsersContext).users
    const setUsers = useContext(UsersContext).setUsers
    const filterUsers = users.filter((user) => user.username === token)[0]

    const handleClick = (e) => {
        const updateUsers = [...users]

        const filterUser = updateUsers.find((user) => user.username === token)
        const filterItem = filterUser.checklist.filter((item) => item.item !== e.target.value)
        filterUser.checklist = filterItem
        setUsers(updateUsers)
    }
    
    return filterUsers.checklist.map((list, index) => {
        return (
            <tr key={index}>
                <td className="text-center">{index+1}</td>
                <td>{list.item}</td>
                <td className="text-center"><Form.Check type="checkbox" value={list.item} checked={list.homeCheckStatus} onChange={handleHomeCheck} /></td>
                <td className="text-center"><Form.Check type="checkbox" value={list.item} checked={list.hotelCheckStatus} onChange={handleHotelCheck} /></td>
                {isDelete && (
                    <td><Button value={list.item} onClick={handleClick} variant="danger"><i className="bi bi-trash"></i></Button></td>
                )}
            </tr>
        )
    })
}

export default ShowChecklist