import React from 'react';
import SearchBox from '../modal/search_box';

class UserSearch extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      id: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleServerSelect = this.handleServerSelect.bind(this);
    this.redirectAfter = this.redirectAfter.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
      id: null
    }, () => {
      if ( this.state.name.length >= 1 ) {
        this.props.searchUsers(this.state);
      }
    })
  }

  redirectAfter() {
    this.props.history.push(`/channels/@me/${this.props.dmServers[this.state.id].channel_id}`);
    this.props.closeModal();
  }

  handleServerSelect(e, object) {
    e.preventDefault();
    this.setState({
      name: object.display_name,
      id: object.id
    },  () => {
      let index = this.props.dmServerIds.indexOf(`${this.state.id}`)
      if (this.state.id === this.props.currentUser ) {
        this.props.history.push('/channels/@me')
        this.props.closeModal();
      } else if ( index !== -1 ) {
        this.props.history.push(`/channels/@me/${this.props.dmServers[this.state.id].channel_id}`);
        this.props.closeModal();
      } else {
        this.props.dmServer(this.state).then(this.redirectAfter);
      }
    });
  }

  componentDidMount() {
    let input = document.getElementById("input-id");
    input.focus()
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log("yay")
  }


  render() {
    return (
      <div id="search-user" className="join-server-container">
        <h1>Search For User</h1>
          <div className="join-server-div">
            <form onSubmit={(e) => this.handleSubmit(e) }>
              <span>@ </span><input autocomplete="off" id="input-id" value={this.state.name} onChange={this.handleChange} />
            </form>
            <div className="search-box-div">
              <SearchBox servers={this.props.servers} query={this.state.name} select={this.handleServerSelect}/>
            </div>
          </div>
      </div>
    )
  }
}

export default UserSearch;
