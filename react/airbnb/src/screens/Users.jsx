import React from "react";
import NavBar from "../components/navbar";
import usersData from '../dummy/users.json'
import { useState } from "react";

function Users()
{
    const [users, setUsers] = useState(usersData)

    return(
        <div>
            <NavBar/>
            <h2 className="page-header">USERS</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>GENDER</th>
                        <th>ADDRESS</th>
                        <th>CITY</th>
                        <th>STATE</th>
                        <th>ZIP CODE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) =>
                    {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    {user['firstName']} {user['lastName']}
                                </td>

                                <td>
                                    <td>{user['email']}</td>
                                    <td>{user['phone']}</td>
                                    <td>{user['gender']}</td>
                                    <td>{user['address']}</td>
                                    <td>{user['city']}</td>
                                    <td>{user['state']}</td>
                                    
                                    <td>{user['zipCode']}</td>
                                </td>

                                <td><button className="btn btn-sm btn-success me-2">Deactivate</button>
                                <button className="btn btn-sm btn-primary">Details</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>



            </table>
        </div>



    )
}

export default Users