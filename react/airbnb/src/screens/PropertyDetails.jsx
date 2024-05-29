import React from "react";
import NavBar from "../components/navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PropertyDetails()
{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [guestRooms, setGuestRooms] = useState('')
    const [bedRooms, setBedRooms] = useState('')
    const [bathRooms, setBathRooms] = useState('')

    const navigate = useNavigate()

    const onSave = () =>
        {
            navigate('/properties')
        }

    return(
      <div>
        <NavBar/>
        <h2 className="page-header">Property Details</h2>
        <div className="form">
            <div className="mb-3">
                <label htmlFor="">Title</label>
                <input 
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
                className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="">Description</label>
                <textarea 
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                className="form-control"
                ></textarea>

            </div>

            <div className="mb-3">
                <label htmlFor="">ADDRESS</label>
                <textarea name="Your address details" 
                onChange={(e) => setAddress(e.target.value)}
                rows={2}
                className="form-control"
                
                ></textarea>
            </div>

            <div className="col">
                <div className="mb-3">
                    <label htmlFor="">CITY</label>
                    <input 
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    className="form-control" />
                </div>
            </div>

            <div className="col">
                <div className="mb-3">
                    <label htmlFor="">STATE</label>
                    <input 
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    className="form-control"
                    />

                </div>

            </div>

            <div className="col">
                <div className="mb-3">
                    <label htmlFor="">ZIP CODE</label>
                    <input 
                    onChange={(e) => e.target.value}
                    type="text"
                    className="form-control" />

                </div>
            </div>

           
            <div className='row mb-3'>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>#Guest Rooms</label>
              <input
                onChange={(e) => setGuestRooms(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>#Bed Rooms</label>
              <input
                onChange={(e) => setBedRooms(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>#Bath Rooms</label>
              <input
                onChange={(e) => setBathRooms(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <button onClick={onSave} className='btn btn-success me-2'>
            Save
          </button>
          <Link to='/properties' className='btn btn-danger'>
            Cancel
          </Link>
        </div>
      </div>
    </div>           

    )
}
export default PropertyDetails