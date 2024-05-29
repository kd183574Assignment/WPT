import React from "react";
import { useState } from "react";
import NavBar from "../components/navbar";
import bookingsData from '../dummy/bookings.json'

function Bookings()
{
    const [bookings, setBookings] = useState(bookingsData)
    return(
        <div>
       <NavBar/>
        <h2 className="page-header">BOOKINGS</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>USER NAME</th>
                    <th>PROPERTY TITLE</th>
                    <th>ADDRESS</th>
                    <th>FROM DATE</th>
                    <th>TO DATE</th>
                    <th>RENT</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((booking, index) => {
                return(
                    <tr>
                        <td>{index + 1}</td>
                        <td>{booking['userName']}</td>
                        <td>{booking['propertyTitle']}</td>
                        <td>{booking['propertyAddress']}</td>
                        <td>{booking['fromDate']}</td>
                        <td>{booking['toDate']}</td>
                        <td>{booking['rent']}</td>
                    </tr>
                )
            }
        )
            }
            </tbody>
        </table>
       </div>
    )
}
export default Bookings