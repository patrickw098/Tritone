# Tritone

[Tritone Live Demo!](https://tritone.herokuapp.com/)

Tritone is a discordapp clone that focuses on real time messaging and seamless navigation across various servers and channels.  It is built using a Rails/PostgreSQL backend with a React.js and Redux frontend. It also utilizes Rails' ActionCables to broadcast events to various subscribed users, updating their Redux/React frontend without the need for a refresh.

This project was implemented from start to finish within a two-week timeframe.

## Features

*  User authentication using encryption.
*  The ability to create, search for, and join servers.
*  The ability to create channels within these servers.
*  The ability to modify servers and channels if you are the server creator.
*  The ability to seamlessly search for and message users directly.
*  The ability to directly message your friends or members of your servers.
*  The ability to live chat using all the above mentioned messaging channels.

## Implementation

### Seamless navigation
This app was designed to showcase the ability for a react-redux frontend to seamlessly render information in a single page app using a highly normalized state.  Since it is a messenger app, however, action cables was utilized to deliver relevant information when necessary in order to simulate a real-time messaging app for multiple users.  

The app uses 3 main views when logged in:
* `/channels/@me` (for the user homepage and friends list)
* `/channels/@me/:channelId` (for the direct messaging page)
* `/channels/:serverId/:channelId` (for messaging within servers/channels)

And 1 secondary view:
* `/channels/:serverId/` (for prefetching relevant channel information)

While navigating from page to page, the app makes a single database API query to fetch the relevant data that is necessary to navigate from one node on the webpage to any of the adjacent nodes using only one query and a normalized store.

### Direct Messaging
Users are able to search for other users using a backend fuzzy search that fetches a list of 10 users who match the query using wildcards in the SQL query.  The users are then merged into the redux store via a dispatch action.  A front end fuzzy search is then implemented.  When a user is selected, it is returned as an object to the search's parent component and stored as its state.  The following code is run to determine whether or not a direct message with the user already exists.  If it does, it redirects to that user's direct message channel with the current user, if it doesn't it creates a new direct message server utilizing the same server/channel architecture and initializes the current user and the selected user as members.

` frontend/components/dms/user_search.jsx`
```javascript

 handleSelect(e, object) {
    e.preventDefault();

    const { dmServerIds, currentUser, history, closeModal, dmServer, dmServers } = this.props;

    this.setState({
      name: object.display_name,
      id: object.id
    },  () => {
      let index = dmServerIds.indexOf(`${this.state.id}`)
      if (this.state.id === currentUser ) {
        history.push('/channels/@me')
        closeModal();
      } else if ( index !== -1 ) {
        history.push(`/channels/@me/${dmServers[this.state.id].channel_id}`);
        closeModal();
      } else {
        dmServer(this.state).then(this.redirectAfter);
      }
    });
  }
```
### Live Messaging with Action Cables
When a user joins a channel.  He subscribes to the channel and a direct link is established with the server.  This subscription is saved in the components' local state and the user is automatically unsubscribed when `componentWillUnmount()` is called.

```javascript
  componentWillUnMount(){
    this.subscription.unsubscribe();
  }

  setUpSubscription(channelId) {
    const { receiveMessage, history, receiveOnlineStatus, removeMessage } = this.props;

    this.consumer = ActionCable.createConsumer();
    this.subscription = this.consumer.subscriptions.create({
      channel: 'ChatChannel',
      room: `${channelId}`
    }, {
      received: ({ payload, command }) => {
        switch (command) {
          case "update_message":
            receiveMessage(payload);
            break;
          case "redirect_to_server":
            history.push(`/channels/${payload}`);
            break;
          case "update_users":
            receiveOnlineStatus(payload);
            break;
          case "delete_message":
            removeMessage(payload);
            break;
          default:
            console.log(`Unknown command, ${command}`)
        }
      }
    });
  }
```
