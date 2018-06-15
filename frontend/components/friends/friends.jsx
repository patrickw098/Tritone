import React from 'react';
import FriendListItemContainer from './friends_list_item_container';

class Friends extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { friends, friendReqs } = this.props;

    if ( friends.length === 0 ) {
      return (
        <div className="no-friends-div">
          <h1 className="no-friends">No Friends Yet...</h1>
          <i className="far fa-frown"></i>
        </div>
      )
    } else {
      return (
        <div className="friends-div">
          <div className="friends-list-div">
            <ul className="friends-list-ul">
              <li id="friend-list-header" className="friend-list-li">
                <div className="friend-list-li-content">
                  <div id="friend-name-header" className="friend-name">
                    FRIENDS
                  </div>
                  <div className="mutual-servers-div">
                    MUTUAL SERVERS
                  </div>
                </div>
              </li>
              { friends.map((friend) => {
                return <FriendListItemContainer key={friend.id} friend={friend} />
              })}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default Friends;
