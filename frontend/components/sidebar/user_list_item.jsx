import React from 'react';

const UserListItem = ({ user }) => {
  return (
    <li className="online-user-list-container-li">
      <i className="fas fa-circle"></i>
        <div className="user-name-container">
          <strong>{user}</strong>
        </div>
    </li>
  )
}

export default UserListItem;
