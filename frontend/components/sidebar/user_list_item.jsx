import React from 'react';

const UserListItem = ({ user }) => {
  return (
    <li><i className="fas fa-circle"></i><strong>{user}</strong>
    </li>
  )
}

export default UserListItem;