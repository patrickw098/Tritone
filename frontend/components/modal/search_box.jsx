import React from 'react';
import SearchBoxItem from './search_box_item';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: props.query
    }
  }


  render() {
    const { servers, query } = this.props;
    let array = [];
    let length = query.length;
    let queryLower = query.toLowerCase();

    servers.forEach( (server) => {
      let serverName = server.name.toLowerCase().split("").slice(0, length).join("");
      if ( serverName === queryLower ) array.push(server);
    })

    if ( array.length === 0 || query.length === 0 ) {
      return (
        <ul className="search-box-ul">
        </ul>
      )
    } else {
      return (
        <ul className="search-box-ul">
        { array.map ((server) => {
          return <SearchBoxItem key={server.id} server={server} select={this.props.select}/>
        })}
        </ul>
      )}
  }
}

export default SearchBox;
