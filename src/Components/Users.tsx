import React from "react";
import "../styles/user.scss";

const Users = () => {
  return (
    <div className="container">
      <div className="back">
        <span> Back to users</span>
        <div className="flex header">
          <h5>User Details</h5>
          <div className="cta">
            <button className="blacklisted">Blacklist User</button>
            <button className="active">Activate User</button>
          </div>
        </div>
        <div className="hero">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className="flex justify-between">
          <ul className="flex">
            <li className="active">General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>App and system</li>
          </ul>
        </nav>

        <div className="information">
          <p className="title">Personal Information</p>
          <div className="demo flex">
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
          </div>
          <div className="demo flex">
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
          </div>
          {/* BORDER LINE */}
          <p className="title">Education and Employment</p>
          <div className="flex">
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
            <div>
              <label>Full Name</label>
              <p>Name here</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
        </div>
        <p className="title">Socials</p>
        <div className="socials flex">
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
        </div>
        <p className="title">Guarantor</p>
        <div className="flex">
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
        </div>
        {/* border line */}
        <div className="flex">
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
          <div>
            <label>Full Name</label>
            <p>Name here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
