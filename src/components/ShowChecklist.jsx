import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"
import { Form } from "react-bootstrap"
import { UsersContext } from "../Contexts/usersContext"

function ShowChecklist({handleHomeCheck, handleHotelCheck}) {
    const token =useContext(AuthContext).token
    const users = useContext(UsersContext).users
    const filterUsers = users.filter((user) => user.username === token)[0]
    
    return filterUsers.checklist.map((list, index) => {
        return (
            <tr key={index}>
                <td className="text-center">{index+1}</td>
                <td>{list.item}</td>
                <td className="text-center"><Form.Check type="checkbox" value={list.item} checked={list.homeCheckStatus} onChange={handleHomeCheck} /></td>
                <td className="text-center"><Form.Check type="checkbox" value={list.item} checked={list.hotelCheckStatus} onChange={handleHotelCheck} /></td>
            </tr>
        )
    })
}

export default ShowChecklist