import React, { useState, useEffect, useContext } from "react";
import { MainContext } from '../contexts/MainContext';

export const Users = () => {
  const {maxUserNumbers, setMaxUserNumbers} = useContext(MainContext)!;
  const [users, setUsers] = useState<any[]>([]);

  // first render
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      //maxUserNumbers is used to limit users
      .then((json) => { setUsers(json.slice(0,maxUserNumbers)) });
  }, []);

  // users re-render
  useEffect(() => {}, [users]);

  // all re-renders (not really usable)
  useEffect(() => {});

  //   const iterateOverObject = () => {}

  return (
    <div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",verticalAlign:"middle"}}>
        <h1 style={{margin:"10px"}}>Users</h1>
        {/* data from context is used */}
        <h2 style={{margin:"10px"}}>Users Limit: {maxUserNumbers}</h2>
      </div>
      {users.map((user, i) => (
        <div key={`${user.name}-${i}`} className="user-card">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          {Object.values(user.company).map((data: any, i) => (
            <p key={`${data}-${i}`}>{data}</p>
          ))}
        </div>
      ))}
    </div>
  );
};
