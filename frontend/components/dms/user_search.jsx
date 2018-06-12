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

  handleServerSelect(e, object) {
    e.preventDefault();
    this.setState({
      name: object.display_name,
      id: object.id
    },  () => {
      console.log(this.state)
      let input = document.getElementById("input-id");
      input.focus()
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log("yay")
  }


  render() {
    return (
      <div className="join-server-container">
        <h1>Search For User</h1>
          <div className="join-server-div">
            <form onSubmit={(e) => this.handleSubmit(e) }>
              <input id="input-id" value={this.state.name} onChange={this.handleChange} />
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
