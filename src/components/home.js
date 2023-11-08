import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import userData from '../data/usersData';

function Home() {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        setUsers(userData);
    }, [])

  return (
    <div>
        <h2>User List</h2>
        
        <ul>
            { users && users.map(user => (
                <li key={user.id}>
                    <Link to={`/user?userId=${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default Home
