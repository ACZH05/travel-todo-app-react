import { Container } from "react-bootstrap";
import ShowChecklist from "../components/ShowChecklist";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { UsersContext } from "../Contexts/usersContext";
import EditButtonChecklist from "../components/EditButtonChecklist";

export default function Checklist() {
    const [isDelete, setIsDelete] = useState(false)
    const token = useContext(AuthContext).token
    const {users, setUsers} = useContext(UsersContext)

    const handleHomeCheck = (e) => {
        const updatedUsers = [...users]
      
        const filterUser = updatedUsers.find((user) => user.username === token)
        if (filterUser) {
          const filterItem = filterUser.checklist.find((item) => item.item === e.target.value)
          if (filterItem) {
            filterItem.homeCheckStatus = e.target.checked
          }
        }
      
        setUsers(updatedUsers)
    };

    const handleHotelCheck = (e) => {
        const updatedUsers = [...users]
      
        const filterUser = updatedUsers.find((user) => user.username === token)
        if (filterUser) {
          const filterItem = filterUser.checklist.find((item) => item.item === e.target.value)
          if (filterItem) {
            filterItem.hotelCheckStatus = e.target.checked
          }
        }
      
        setUsers(updatedUsers)
    };

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
                    {isDelete && (
                        <th>Delete</th>
                    )}
                </tr>
            </thead>
            <tbody className="text-start">
                <ShowChecklist handleHomeCheck={handleHomeCheck} handleHotelCheck={handleHotelCheck} isDelete={isDelete} />
            </tbody>
        </table>
    <EditButtonChecklist isDelete={isDelete} setIsDelete={setIsDelete} />
    </Container>
    )
}
