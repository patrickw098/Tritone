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
    this.handleSelect = this.handleSelect.bind(this);
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

  componentDidMount() {
    let input = document.getElementById("input-id");
    input.focus()
  }


  handleSubmit(e) {
    e.preventDefault();
  }


  render() {
    return (
      <div id="search-user" className="join-server-container">
        <h1>Search For User</h1>
          <div className="join-server-div">
            <form onSubmit={(e) => this.handleSubmit(e) }>
              <div className="input-line">
                <span>@ </span>
                  <input autoComplete="off" id="input-id" className="user-search" value={this.state.name} onChange={this.handleChange} />
              </div>
            </form>
            <div className="search-box-div">
              <SearchBox servers={this.props.servers} query={this.state.name} select={this.handleSelect}/>
            </div>
          </div>
      </div>
    )
  }
}

export default UserSearch;
