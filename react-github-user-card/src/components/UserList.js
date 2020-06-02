import React from 'react'
import User from './User'

const UserList = props => {
    return (
        <div className="user-container" style={{height: '100vh', display: 'flex', alignItems: 'center'}}>
            {props.userData.map(user => {
                return (
                    <User key={user.id} data={user} />
                )
            })}
        </div>
    )
}

export default UserList