import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {

    let history = useHistory();
    const [user,setUser] = useState({
        name:"",
        branch:"",
        email:"",
        phone:"",
        website:"",
        sap:"",
        roll:"",
        lang:""
    });

    const { name, branch, email, phone, website,sap,roll,lang} = user;
    const onInputChange = (e) =>{
        setUser({...user,[e.target.name]: e.target.value});
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
        history.push("/");
    }

  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4"> Add a User</h2>
          <form onSubmit= {e => onSubmit(e)}>
            <div className="form-group">
              <input
                name="name"
                value={name}
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Your Name"
                onChange={ e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="branch"
                value={branch}
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Your Branch"
                onChange={ e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                value={email}
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Your Email Address"
                onChange={ e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="phone"
                value={phone}
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Your Phone Number"
                onChange={ e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="sap"
                value={sap}
                className="form-control form-control-lg"
                type="number"
                placeholder="Enter Your SAP Id"
                onChange={ e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="roll"
                value={roll}
                className="form-control form-control-lg"
                type="number"
                placeholder="Enter Your Roll No."
                onChange={ e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="lang"
                value={lang}
                className="form-control form-control-lg"
                type="text"
                placeholder="Language Known"
                onChange={ e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="website"
                value={website}
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Your Address"
                onChange={ e => onInputChange(e)}
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">Add User</button>

          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
