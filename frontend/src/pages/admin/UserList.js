import React from 'react'

export default function UserList() {

    const { userList } = useSelector(state => state.userList);
    const { users, loading, error } = userList;
    return (
        <div>
            {users.map((user, key) => (
                <div key={key}>
                    <li>{user.name} </li>
                    
                </div>

            ))}
        </div>
    )
}
