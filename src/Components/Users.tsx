import React from 'react'

interface User{
  name:string;
  email:string;
  mobile:number;
  Date_joined:string;
  status:string;
}

const Users = ({data}:User) => {
  return (
    <table className="table-container">
    <thead>
      <th>
        <div>
          Organization
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
              fill="#545F7D"
            />
          </svg>
        </div>
      </th>
      <th>
        <div>
          Username
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
              fill="#545F7D"
            />
          </svg>
        </div>
      </th>
      <th>
        <div>
          Email
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
              fill="#545F7D"
            />
          </svg>
        </div>
      </th>
      <th>
        <div>
          Phone Number
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
              fill="#545F7D"
            />
          </svg>
        </div>
      </th>
      <th>
        <div>
          Date Joined
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
              fill="#545F7D"
            />
          </svg>
        </div>
      </th>
      <th>
        <div>
          Status
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
              fill="#545F7D"
            />
          </svg>
        </div>
      </th>
      <th></th>
    </thead>
    <tbody>
      {data.map((user:User,index:number)=>(
        <>
        <tr key={index}>
        <td>Lendsqr</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>0{user.mobile}</td>
        <td>{user.Date_joined}</td>
        <td>{user.status}</td>
        <td>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5530_2637)">
              <path
                d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z"
                fill="#545F7D"
              />
            </g>
            <defs>
              <clipPath id="clip0_5530_2637">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </td>
      </tr>
        </>
      ))}
      
    </tbody>
  </table>
  )
}

export default Users