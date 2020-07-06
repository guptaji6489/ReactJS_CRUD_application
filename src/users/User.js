import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const User = ( )=>
{
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
        sap:""
    });

    const {id} = useParams();

    useEffect(()=>{
        loadUser();
    }, []);

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    }
 

  return(
    <>
    <br/>
  <div className="container">
  <Link  className="btn btn-primary" to='/'>Back to Home </Link>
  <h1 className="display-4"> User Id: {id} </h1>
  <hr/>
  <ul className="list-group w-50">
        <li className="list-group-item"><b>Name:</b> {user.name}</li>
        <li className="list-group-item"><b>Branch:</b> {user.branch}</li>
        <li className="list-group-item"><b>Email: </b> {user.email}</li>
        <li className="list-group-item"><b>Phone: </b> {user.phone}</li>
        <li className="list-group-item"><b>SAP ID:</b>  {user.sap}</li>
        <li className="list-group-item"><b>Roll No:</b> {user.roll}</li>
        <li className="list-group-item"><b>Language Known: </b>{user.lang}</li>
        <li className="list-group-item"><b>Address: </b>{user.website}</li>


  </ul>

  </div>
      
    </>


  )
}

export default User;
