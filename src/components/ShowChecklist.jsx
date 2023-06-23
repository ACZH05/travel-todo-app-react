import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"
import { Button, Form } from "react-bootstrap"
import { UsersContext } from "../Contexts/usersContext"

function ShowChecklist({handleHomeCheck, handleHotelCheck, isDelete}) {
    const token =useContext(AuthContext).token
    const users = useContext(UsersContext).users
    const setUsers = useContext(UsersContext).setUsers
    const filterUsers = users.filter((user) => user.username === token)[0]

    const handleDelete = (e) => {
        const value = e.target.value
        const updateUsers = [...users];

        const filterUser = updateUsers.find((user) => user.username === token);
        
        if (filterUser) {
            const userChecklist = filterUser.checklist
          const filterItem = userChecklist.filter((item) => item.item != value);
          console.log(filterItem)
        
          if (filterItem) {
            filterUser.checklist = filterItem;
          }
        }
        
        const updatedUsers = [...updateUsers]; // Create a copy of the updated users array
        setUsers(updatedUsers); // Update the state with the new array
        
    }
    
    return filterUsers.checklist.map((list, index) => {
        return (
            <tr key={index}>
                <td className="text-center">{index+1}</td>
                <td>{list.item}</td>
                <td className="text-center"><Form.Check type="checkbox" value={list.item} checked={list.homeCheckStatus} onChange={handleHomeCheck} /></td>
                <td className="text-center"><Form.Check type="checkbox" value={list.item} checked={list.hotelCheckStatus} onChange={handleHotelCheck} /></td>
                {isDelete && (
                    <td><Button value={list.item} onClick={handleDelete} variant="danger"><i className="bi bi-trash"></i></Button></td>
                )}
            </tr>
        )
    })
}

export default ShowChecklist