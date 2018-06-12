import React from 'react';
import Avatar from '../avatar/avatar';

const UserListItem = ({ user }) => {
  return (
    <li className="online-user-list-container-li">
      <Avatar user={user}/>
        <div className="user-name-container">
          <strong>{user}</strong>
        </div>
    </li>
  )
}

export default UserListItem;
