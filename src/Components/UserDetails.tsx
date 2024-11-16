// import React from "react";
import "../styles/user.scss";
import { Userprop } from "../pages/Dashboard";

type UserDetailsProps = {
  user: Userprop;
};
const UserDetails = ({user}:UserDetailsProps) => {
  return (
    <div className="container">
      <div className="back">
        <div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z"
              fill="#545F7D"
            />
          </svg>
        </div>
        <span> Back to users</span>
      </div>
      <div className="flex header">
        <h5>User Details</h5>
        <div className="cta">
          <button className="blacklisted">Blacklist User</button>
          <button className="active">Activate User</button>
        </div>
      </div>
      <div className="section">
      <div className="hero">
        <div className="flex">
          <div className="icon">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.16" cx="50" cy="50" r="50" fill="#213F7D" />
              <path
                d="M36.0405 65.1796C36.4796 62.2202 37.7936 59.6264 39.9796 57.4C42.7405 54.6 46.0732 53.2 49.9796 53.2C53.886 53.2 57.2204 54.6 59.9796 57.4C62.1796 59.6266 63.5062 62.2204 63.9593 65.1796M58.1405 44.0204C58.1405 46.247 57.3468 48.1532 55.7593 49.7408C54.1734 51.3408 52.253 52.1408 50.0001 52.1408C47.7594 52.1408 45.8409 51.3408 44.2409 49.7408C42.6534 48.1533 41.8596 46.247 41.8596 44.0204C41.8596 41.7673 42.6534 39.8468 44.2409 38.2596C45.8409 36.6737 47.7596 35.8799 50.0001 35.8799C52.2532 35.8799 54.1737 36.6737 55.7593 38.2596C57.3468 39.8471 58.1405 41.7674 58.1405 44.0204Z"
                stroke="#213F7D"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="title">{user.name}</p>
            <p>{user.user_id}</p>
          </div>
        </div>
        <div>
          <p>User's Tier</p>
          <div className="tier-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z"
                fill="#E9B200"
              />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5530_1562)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
                  fill="#E9B200"
                />
              </g>
              <defs>
                <clipPath id="clip0_5530_1562">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5530_1562)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
                  fill="#E9B200"
                />
              </g>
              <defs>
                <clipPath id="clip0_5530_1562">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div>
          <h3 className="balance">₦{user.loan_amount_owed}</h3>
          <p>{user.bank_account_number}/{user.bank_name}</p>
        </div>
      </div>
      <nav>
        <ul className="flex">
          <li className="active">General Details</li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and system</li>
        </ul>
      </nav>
      </div>


      <div className="white">
        <div className="information">
          <p className="title">Personal Information</p>
          <div className="  demo flex">
            <div>
              <label>Full Name</label>
              <p>{user.name}</p>
            </div>
            <div>
              <label>Phone Number</label>
              <p>{user.mobile}</p>
            </div>
            <div>
              <label>email address</label>
              <p>{user.email}</p>
            </div>
            <div>
              <label>BVN</label>
              <p>{user.bvn}</p>
            </div>
            <div>
              <label>Gender</label>
              <p>{user.gender}</p>
            </div>
          </div>
          <div className=" border demo flex">
            <div>
              <label>Marital status</label>
              <p>{user.marital_status}</p>
            </div>
            <div>
              <label>children</label>
              <p>{user.children_count}</p>
            </div>
            <div>
              <label>type of residence</label>
              <p>{user.type_of_residence}</p>
            </div>
          </div>
          {/* BORDER LINE */}
          <p className="title ">Education and Employment</p>
          <div className=" flex">
            <div>
              <label>Level of Education</label>
              <p>{user.education}</p>
            </div>
            <div>
              <label>Employment status</label>
              <p>{user.employment_status}</p>
            </div>
            <div>
              <label>sector of employment</label>
              <p>{user.sector}</p>
            </div>
            <div>
              <label>duration of employemnt</label>
              <p>{}</p>
            </div>
          </div>
          <div className="demo flex">
            <div>
              <label>office email</label>
              <p>{user.name}@{user.organization}</p>
            </div>
            <div>
              <label>monthly income</label>
              <p>₦{user.loan_amount_owed}</p>
            </div>
            <div>
              <label>loan repayment</label>
              <p>₦{user.loan_amount_owed}</p>
            </div>
          </div>
        </div>

        <p className="title">Socials</p>
        <div className="border socials flex demo">
          <div>
            <label>twitter</label>
            <p>{user.socials}@twitter</p>
          </div>
          <div>
            <label>facebook</label>
            <p>{user.socials}@facebook</p>
          </div>
          <div>
            <label> instagram</label>
            <p>{user.socials}@instagram</p>
          </div>
        </div>
        <p className="title">Guarantor</p>
        <div className="border flex">
          <div>
            <label>Full Name</label>
            <p>{user.guarantor.name}</p>
          </div>
          <div>
            <label>phone number</label>
            <p>0{user.guarantor.mobile}</p>
          </div>
          <div>
            <label>email address</label>
            <p>{user.email}</p>
          </div>
          <div>
            <label>relationship</label>
            <p>{user.guarantor.relationship}</p>
          </div>
        </div>
        {/* border line */}
        <div className=" flex">
          <div>
            <label>Full Name</label>
            <p>{user.guarantor.name}</p>
          </div>
          <div>
            <label>phone number</label>
            <p>0{user.mobile}</p>
          </div>
          <div>
            <label>email address</label>
            <p>{user.email}</p>
          </div>
          <div>
            <label>relationship</label>
            <p>{user.guarantor.relationship}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
