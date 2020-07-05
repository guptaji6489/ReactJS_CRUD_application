import React from "react";

const AddUser = () => {
  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4"> Add a User</h2>
          <form>
            <div className="form-group">
              <input
                name=" "
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group">
              <input
                name=" "
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Your UserName"
              />
            </div>
            <div className="form-group">
              <input
                name=" "
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form-group">
              <input
                name=" "
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="form-group">
              <input
                name=" "
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Your Address"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
