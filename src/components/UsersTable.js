import React, { useState, useEffect } from 'react';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [addedUser, setAddedUser] = useState([]);

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        setUsers(data);
    }

    const handleClickAdd = (user) => {
        const resultData = addedUser.some(u => u.id === user.id);
        if (!resultData) {
            setAddedUser([...addedUser, user]);
        }
    }

    const hanldeClickDelete = (item) => {
        setAddedUser(addedUser.filter((i) => i.id !== item.id));
    }
    return (
        <div>
            <h2>Users Table!..</h2>
            <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>User</th>
                    <th>User Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.user}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <button onClick={() => handleClickAdd(user)}>Add</button>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <table>
              <tbody>
                {
                    addedUser.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.user}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <button onClick={() => hanldeClickDelete(item)}>Delete</button>
                        </tr>
                         
                    ))
                }
              </tbody>
            </table>
        </div>
    )
}

export default UsersTable;